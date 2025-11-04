document.addEventListener('DOMContentLoaded', function () {
    // --- Modal Functionality ---
    const modalBackdrop = document.querySelector('[data-articles-modal-backdrop]');
    const modalBody = document.querySelector('[data-articles-modal-body]');
    const modalTitle = document.querySelector('[data-articles-modal-title]');
    const modalMeta = document.querySelector('[data-articles-modal-meta]');
    const closeButton = document.querySelector('[data-articles-modal-close]');
    const allArticleButtons = document.querySelectorAll('[data-article-target]'); // Renamed to avoid conflict
    let lastFocusedElement = null;
    let previousBodyOverflow = '';

    function initMetabolicChecker(root) {
      if (!root) return;
      const section = root.querySelector('[data-metabolic-checker]');
      if (!section) return;
      const el = {
        sex: section.querySelector('[data-sex]'),
        height: section.querySelector('[data-height]'),
        weight: section.querySelector('[data-weight]'),
        waist: section.querySelector('[data-waist]'),
        bpSys: section.querySelector('[data-bp-sys]'),
        bpDia: section.querySelector('[data-bp-dia]'),
        fpg: section.querySelector('[data-lab-fpg]'),
        a1c: section.querySelector('[data-lab-a1c]'),
        tg: section.querySelector('[data-lab-tg]'),
        hdl: section.querySelector('[data-lab-hdl]'),
        alt: section.querySelector('[data-lab-alt]'),
        risks: section.querySelectorAll('[data-risk]'),
        calcBtn: section.querySelector('[data-action="calc"]'),
        resetBtn: section.querySelector('[data-action="reset"]'),
        summary: section.querySelector('[data-summary]'),
        riskLevel: section.querySelector('[data-risk-level]'),
        actions: section.querySelector('[data-actions]'),
      };
      function num(v) { const n = parseFloat(v); return Number.isFinite(n) ? n : null; }
      function round1(n){ return Math.round(n*10)/10; }
      function compute() {
        const height = num(el.height?.value);
        const weight = num(el.weight?.value);
        const waist = num(el.waist?.value);
        const sex = el.sex?.value || '';
        const bpSys = num(el.bpSys?.value);
        const bpDia = num(el.bpDia?.value);
        const fpg = num(el.fpg?.value);
        const a1c = num(el.a1c?.value);
        const tg = num(el.tg?.value);
        const hdl = num(el.hdl?.value);
        const alt = num(el.alt?.value);
        let summary = [];
        let score = 0;
        const flags = [];
        let bmi = null;
        if (height && weight) {
          bmi = weight / Math.pow(height/100, 2);
          let cat = '正常';
          if (bmi >= 27) cat = '肥胖';
          else if (bmi >= 24) cat = '過重';
          summary.push(`BMI ${round1(bmi)}（${cat}）`);
          if (bmi >= 27) score += 2; else if (bmi >= 24) score += 1;
        }
        if (waist) {
          const wcCut = sex === 'female' ? 80 : 90;
          const high = waist >= wcCut;
          summary.push(`腰圍 ${waist}cm（${high ? '偏高' : '標準'}）`);
          if (high) score += 1;
        }
        if (bpSys && bpDia) {
          const high = bpSys >= 130 || bpDia >= 80;
          summary.push(`血壓 ${bpSys}/${bpDia} mmHg（${high ? '偏高' : '理想'}）`);
          if (high) score += 1;
        }
        let lifestyleHits = 0;
        el.risks.forEach(chk => { if (chk.checked) lifestyleHits++; });
        if (lifestyleHits) {
          summary.push(`生活習慣風險 ${lifestyleHits} 項`);
          score += lifestyleHits >= 2 ? 2 : 1;
        }
        if (fpg) {
          if (fpg >= 126) { score += 3; flags.push('疑似糖尿病：空腹血糖 ≥126'); }
          else if (fpg >= 100) { score += 1; }
          summary.push(`空腹血糖 ${fpg}`);
        }
        if (a1c) {
          if (a1c >= 6.5) { score += 3; flags.push('疑似糖尿病：HbA1c ≥6.5%'); }
          else if (a1c >= 5.7) { score += 1; }
          summary.push(`HbA1c ${a1c}%`);
        }
        if (tg) {
          if (tg >= 200) { score += 2; }
          else if (tg >= 150) { score += 1; }
          summary.push(`三酸甘油脂 ${tg}`);
        }
        if (hdl) {
          const low = (sex === 'male' && hdl < 40) || (sex === 'female' && hdl < 50) || (!sex && hdl < 50);
          if (low) score += 1;
          summary.push(`HDL ${hdl}${low ? '（偏低）' : ''}`);
        }
        if (alt) {
          if (alt > 40) { score += 1; summary.push(`ALT ${alt}（偏高）`); }
          else summary.push(`ALT ${alt}`);
        }
        let level = '低風險';
        let levelColor = 'text-emerald-700';
        let actions = [
          '維持每週 ≥150 分鐘有氧 + 2 次肌力',
          '採 8 分飽、優先蛋白與高纖蔬菜',
          '晚餐後散步 10–20 分鐘，助控糖脂'
        ];
        if (score >= 6) {
          level = '高風險'; levelColor = 'text-red-700';
          actions = [
            '建議 1–3 個月內門診評估（帶此結果）',
            '每週 5 天運動，含 3 天中高強度有氧',
            '餐餐半碗以上蔬菜、每餐蛋白 1 掌心',
            '避免含糖飲與宵夜，晚間 3 小時前結束進食',
          ];
        } else if (score >= 3) {
          level = '中風險'; levelColor = 'text-amber-700';
          actions = [
            '連續 4 週記錄飲食與步數，設 7000–10000 步/日',
            '精製澱粉減量 1/3，改全穀雜豆與優質蛋白',
            '固定就寢時間，目標 7–8 小時睡眠',
          ];
        }
        if (flags.length) {
          actions.unshift('紅旗指標：' + flags.join('；') + ' → 儘速就醫確診');
        }
        if (el.summary) el.summary.innerHTML = summary.length ? '<ul class="list-disc list-inside space-y-1">' + summary.map(s=>`<li>${s}</li>`).join('') + '</ul>' : '<span class="text-slate-500">尚無可計算資料</span>';
        if (el.riskLevel) {
          el.riskLevel.textContent = `${level}（分數 ${score}）`;
          el.riskLevel.className = `text-sm ${levelColor}`;
        }
        if (el.actions) el.actions.innerHTML = actions.map(a=>`<li>${a}</li>`).join('');
      }
      function reset() {
        section.querySelectorAll('input').forEach(i => {
          if (i.type === 'checkbox') i.checked = false; else i.value = '';
        });
        section.querySelectorAll('select').forEach(s => s.value = '');
        if (el.summary) el.summary.innerHTML = '';
        if (el.riskLevel) { el.riskLevel.textContent = '—'; el.riskLevel.className = 'text-sm'; }
        if (el.actions) el.actions.innerHTML = '';
      }
      el.calcBtn?.addEventListener('click', compute);
      el.resetBtn?.addEventListener('click', reset);
      section.querySelectorAll('input').forEach(i => {
        i.addEventListener('keydown', (e) => { if (e.key === 'Enter') compute(); });
      });
    }

    function openModal(button) {
      const targetId = button.getAttribute('data-article-target');
      const template = document.getElementById(targetId);
      if (!template) return;
      modalBody.innerHTML = '';
      modalBody.appendChild(template.content.cloneNode(true));
      initMetabolicChecker(modalBody);
      modalTitle.textContent = template.dataset.title || '';
      modalMeta.textContent = template.dataset.meta || button.getAttribute('data-article-meta') || '';
      previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      modalBackdrop.classList.remove('hidden');
      modalBackdrop.setAttribute('aria-hidden', 'false');
      lastFocusedElement = button;
      closeButton.focus();
    }

    function closeModal() {
      modalBackdrop.classList.add('hidden');
      modalBackdrop.setAttribute('aria-hidden', 'true');
      modalBody.innerHTML = '';
      document.body.style.overflow = previousBodyOverflow;
      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    }

    allArticleButtons.forEach(function (button) {
      button.addEventListener('click', function () { openModal(button); });
      button.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openModal(button);
        }
      });
    });

    closeButton.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', function (event) {
      if (event.target === modalBackdrop) { closeModal(); }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !modalBackdrop.classList.contains('hidden')) {
        closeModal();
      }
    });

    // --- Filtering, Sorting, and Time Ago Logic ---
    const categoryButtonsContainer = document.querySelector('#category-buttons');
    const articlesGrid = document.querySelector('.articles-grid');
    const sortButton = document.querySelector('#sort-by-date-btn');
    let sortOrder = 'desc';

    function parseDate(metaString) {
      if (!metaString) return null;
      let datePart = metaString.split('·')[0].trim();
      datePart = datePart.replace('年', '-').replace('月', '-').replace('日', '');
      const date = new Date(datePart);
      return isNaN(date) ? null : date;
    }

    function formatTimeAgo(dateString) {
        const date = parseDate(dateString);
        if (!date) return null;

        const now = new Date();
        const seconds = Math.floor((now - date) / 1000);

        if (seconds < 60) return `剛剛`;
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}分鐘前`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}小時前`;
        const days = Math.floor(hours / 24);
        if (days < 30) return `${days}天前`;
        const months = Math.floor(days / 30);
        if (months < 12) return `${months}個月前`;
        const years = Math.floor(days / 365);
        return `${years}年前`;
    }

    function updateAllArticles() {
      const allCards = Array.from(articlesGrid.querySelectorAll('.article-card'));
      const activeCategoryBtn = categoryButtonsContainer.querySelector('.category-btn.active');
      const activeCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'all';

      allCards.sort((a, b) => {
        const dateA = parseDate(a.dataset.articleMeta);
        const dateB = parseDate(b.dataset.articleMeta);
        if (!dateA || !dateB) return 0;
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });

      allCards.forEach(card => {
        // Append/Update Time Ago Text
        const metaElement = card.querySelector('.article-card-meta');
        const dateString = card.dataset.articleMeta;
        let timeAgoSpan = metaElement.querySelector('.time-ago');
        if (!timeAgoSpan) {
            timeAgoSpan = document.createElement('span');
            timeAgoSpan.className = 'time-ago';
            metaElement.appendChild(timeAgoSpan);
        }
        const timeAgoText = formatTimeAgo(dateString);
        if (timeAgoText) {
            timeAgoSpan.textContent = ` · ${timeAgoText}`;
        }

        // Filter visibility
        const cardCategory = card.dataset.category;
        const isVisible = (activeCategory === 'all' || cardCategory === activeCategory);
        card.style.display = isVisible ? 'flex' : 'none';
        
        // Re-append to grid to apply order
        articlesGrid.appendChild(card);
      });
    }

    categoryButtonsContainer.addEventListener('click', (e) => {
      const button = e.target.closest('.category-btn');
      if (button && button.id !== 'sort-by-date-btn') {
        categoryButtonsContainer.querySelector('.category-btn.active').classList.remove('active');
        button.classList.add('active');
        updateAllArticles();
      }
    });

    sortButton.addEventListener('click', () => {
      sortOrder = (sortOrder === 'asc') ? 'desc' : 'asc';
      sortButton.querySelector('svg').style.transform = (sortOrder === 'asc') ? 'rotate(180deg)' : 'rotate(0deg)';
      updateAllArticles();
    });

    function initializePage() {
      sortOrder = 'desc';
      sortButton.querySelector('svg').style.transform = 'rotate(0deg)';
      updateAllArticles();
    }

    initializePage();
  });
