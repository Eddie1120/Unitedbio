// Backup of patent carousel control logic extracted from index_noNAV.html

// Patent image registry
const patentImages = {
    '1': [
        'https://unitedbio.com.tw/upload/3552/home/3552_690977501b0cd.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_69097759232f7.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_690973fb89539.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909747e29d65.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909752c885f9.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909753848c65.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909755398a61.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909755c7eb58.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909756844634.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_69097572075c7.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909757d2de3a.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_69097585c8439.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_690976b4cabde.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_690976be3ddf9.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_690976f4d5c01.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_69097704151eb.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_69097710de6b4.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909771a04586.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_69097723848f0.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909772c0fd8c.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_690977358550c.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909773d84fd3.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909774723589.webp'
    ],
    '2': [
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a39495db4.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a39d5a405.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a2726a898.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a28ea46fc.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a296606d4.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a29e3cf6f.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a2a634ca9.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a2afa4a55.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a2cc08163.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a2d9c44b6.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a2e6cf8d9.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a2ee64032.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a2f5391e1.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a3087396a.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a3113e23e.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a31a1cfae.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a3295506b.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a331abb91.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a33ab4a40.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a34510eca.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a351d923a.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a35e0a483.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a367533eb.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a36f474cf.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a37d8afd0.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a38722657.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909a37d8afd0.webp'
    ],
    '3': [
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab8f339ba.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab979ad99.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aa9624d02.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aab506c43.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aabcaa316.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aac49dd91.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aad03a29e.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aadde691f.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aae5133b0.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aaed0030c.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aaf68b42b.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aafd8411a.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab0b2eb00.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab1359610.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab1b083df.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab21e07c9.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab29d6e6d.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab30a2450.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab38dc14f.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab4a637ab.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab51d1d60.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab5ab424e.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab63dbc67.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab6cbc837.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab758153d.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab7eae337.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ab87dc0e6.webp'
    ],
    '4': [
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aedbe7210.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aee437cf8.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ae2d94043.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ae3d1f722.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ae44826b9.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ae4c32314.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ae600aa16.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ae7132ac3.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ae7abfb5b.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ae83322c1.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ae8b04627.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ae94af112.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909ae9d85d54.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aea5bd119.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aeae144cd.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aeb9156d3.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aec2a0e31.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aecbb8b9d.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909aed2d3c86.webp'
    ],
    '5': [
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b3f0cfe05.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b3fb11a88.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b1d83d629.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b1e400a0d.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b233eba37.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b24088ae0.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b24bbf319.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b26bda4d0.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b2564c239.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b27c1f7b1.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b2895ff33.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b29b731bf.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b2aac3fc2.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b2b456d0c.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b2bd2758a.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b2c55f7ac.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b2d099e75.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b2da4bb71.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b2f030fb4.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b2f9cf7ce.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b30caf396.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b31ca65c0.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b326a618c.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b331ed673.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b33eb93be.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b351c510a.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b367520b1.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b35cde07d.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b3701a81e.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b3781a7dd.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b37f6310d.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b38a625a0.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b395bbeed.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b39e1f008.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b3add977d.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b3b810200.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b3c17acc3.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b3cabd80a.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b3db094f5.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b3e6df99d.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b3db094f5.webp'
    ],
    '6': [
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b5292771c.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b530c7527.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b49a618eb.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b4a34dfa4.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b4aa9986b.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b4bb67223.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b4c67bf6b.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b4cf61350.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b4d9aebf4.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b4e24939f.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b4eacb008.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b4f6110ac.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b4fe8793c.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b507acd2d.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b51298223.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b51d1c3c2.webp',
        'https://unitedbio.com.tw/upload/3552/home/3552_6909b51298223.webp'
    ]
};

// Configuration
function getImagesPerPage() {
    const width = window.innerWidth;
    if (width >= 1536) return 6;
    if (width >= 1280) return 6;
    if (width >= 1024) return 5;
    if (width >= 768) return 5;
    if (width >= 640) return 4;
    return 1;
}

// Initialize all patent carousels
function initializePatentCarousels() {
    if (document.readyState === 'loading') {
        window.addEventListener('load', function() {
            createCarouselsForPatents();
            addResizeListener();
        });
    } else {
        window.addEventListener('load', function() {
            createCarouselsForPatents();
            addResizeListener();
        });
    }
}

// Initialize mobile patent 1 carousel
function initializeMobilePatent1Carousel() {
    const images = patentImages['1'] || [];
    if (images.length === 0) return;

    let currentIndex = 0;
    const imgElement = document.getElementById('mobile-patent-1-img');
    const prevBtn = document.getElementById('mobile-patent-1-prev');
    const nextBtn = document.getElementById('mobile-patent-1-next');

    if (!imgElement || !prevBtn || !nextBtn) return;

    function updateImage() {
        imgElement.src = images[currentIndex];
        imgElement.alt = `專利1圖片 ${currentIndex + 1}`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImage();
        }
    });

    // Initialize first image
    updateImage();
}

// Initialize mobile patent 2 carousel
function initializeMobilePatent2Carousel() {
    const images = patentImages['2'] || [];
    if (images.length === 0) return;

    let currentIndex = 0;
    const imgElement = document.getElementById('mobile-patent-2-img');
    const prevBtn = document.getElementById('mobile-patent-2-prev');
    const nextBtn = document.getElementById('mobile-patent-2-next');

    if (!imgElement || !prevBtn || !nextBtn) return;

    function updateImage() {
        imgElement.src = images[currentIndex];
        imgElement.alt = `專利2圖片 ${currentIndex + 1}`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImage();
        }
    });

    // Initialize first image
    updateImage();
}

// Initialize mobile patent 3 carousel
function initializeMobilePatent3Carousel() {
    const images = patentImages['3'] || [];
    if (images.length === 0) return;

    let currentIndex = 0;
    const imgElement = document.getElementById('mobile-patent-3-img');
    const prevBtn = document.getElementById('mobile-patent-3-prev');
    const nextBtn = document.getElementById('mobile-patent-3-next');

    if (!imgElement || !prevBtn || !nextBtn) return;

    function updateImage() {
        imgElement.src = images[currentIndex];
        imgElement.alt = `專利3圖片 ${currentIndex + 1}`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImage();
        }
    });

    // Initialize first image
    updateImage();
}

// Initialize mobile patent 4 carousel
function initializeMobilePatent4Carousel() {
    const images = patentImages['4'] || [];
    if (images.length === 0) return;

    let currentIndex = 0;
    const imgElement = document.getElementById('mobile-patent-4-img');
    const prevBtn = document.getElementById('mobile-patent-4-prev');
    const nextBtn = document.getElementById('mobile-patent-4-next');

    if (!imgElement || !prevBtn || !nextBtn) return;

    function updateImage() {
        imgElement.src = images[currentIndex];
        imgElement.alt = `專利4圖片 ${currentIndex + 1}`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImage();
        }
    });

    // Initialize first image
    updateImage();
}

// Initialize mobile patent 5 carousel
function initializeMobilePatent5Carousel() {
    const images = patentImages['5'] || [];
    if (images.length === 0) return;

    let currentIndex = 0;
    const imgElement = document.getElementById('mobile-patent-5-img');
    const prevBtn = document.getElementById('mobile-patent-5-prev');
    const nextBtn = document.getElementById('mobile-patent-5-next');

    if (!imgElement || !prevBtn || !nextBtn) return;

    function updateImage() {
        imgElement.src = images[currentIndex];
        imgElement.alt = `專利5圖片 ${currentIndex + 1}`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImage();
        }
    });

    // Initialize first image
    updateImage();
}

// Initialize mobile patent 6 carousel
function initializeMobilePatent6Carousel() {
    const images = patentImages['6'] || [];
    if (images.length === 0) return;

    let currentIndex = 0;
    const imgElement = document.getElementById('mobile-patent-6-img');
    const prevBtn = document.getElementById('mobile-patent-6-prev');
    const nextBtn = document.getElementById('mobile-patent-6-next');

    if (!imgElement || !prevBtn || !nextBtn) return;

    function updateImage() {
        imgElement.src = images[currentIndex];
        imgElement.alt = `專利6圖片 ${currentIndex + 1}`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImage();
        }
    });

    // Initialize first image
    updateImage();
}

// Initialize mobile patent carousel when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initializeMobilePatent1Carousel();
        initializeMobilePatent2Carousel();
        initializeMobilePatent3Carousel();
        initializeMobilePatent4Carousel();
        initializeMobilePatent5Carousel();
        initializeMobilePatent6Carousel();
    });
} else {
    initializeMobilePatent1Carousel();
    initializeMobilePatent2Carousel();
    initializeMobilePatent3Carousel();
    initializeMobilePatent4Carousel();
    initializeMobilePatent5Carousel();
    initializeMobilePatent6Carousel();
}

function addResizeListener() {
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            document.querySelectorAll('.patent-carousel-generated').forEach(carousel => carousel.remove());
            createCarouselsForPatents();
        }, 250);
    });
}

function createCarouselsForPatents() {
    for (let patentId = 1; patentId <= 6; patentId++) {
        const images = patentImages[patentId.toString()] || [];
        if (images.length > 0) {
            createPatentCarousel(patentId, images);
        }
    }
}

function createPatentCarousel(patentId, images) {
    const imagesPerPage = getImagesPerPage();
    const totalPages = Math.ceil(images.length / imagesPerPage);
    let currentPage = 0;

    let carouselContainer = document.createElement('div');
    carouselContainer.className = `mt-8 mb-12 patent-carousel patent-${patentId}`;
    carouselContainer.style.width = '100%';
    carouselContainer.innerHTML = `
        <div class="relative px-8 md:px-8 lg:px-12">
            <button class="patent-prev-btn-${patentId} absolute left-2 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed" disabled>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <div class="patent-images-grid-${patentId} flex gap-4 px-12 md:px-8 lg:px-16 overflow-x-auto" style="width: 100%;"></div>
            <button class="patent-next-btn-${patentId} absolute right-2 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
        <div class="patent-page-indicators-${patentId} flex justify-center mt-6 space-x-2"></div>
    `;
    carouselContainer.classList.add('patent-carousel-generated');

    let patentContainer;
    if (window.innerWidth < 768) {
        patentContainer = document.querySelector(`.mobile-patent-carousel-${patentId}`);
    } else {
        patentContainer = document.querySelector(`[data-patent-id="${patentId}"]`);
    }

    if (patentContainer) {
        if (window.innerWidth < 768) {
            patentContainer.innerHTML = carouselContainer.innerHTML;
            patentContainer.classList.add('patent-carousel', `patent-${patentId}`);
            carouselContainer = patentContainer;
        } else {
            patentContainer.insertAdjacentElement('afterend', carouselContainer);
        }
    } else {
        console.log(`Patent ${patentId} container not found`);
    }

    const indicatorsContainer = carouselContainer.querySelector(`.patent-page-indicators-${patentId}`);
    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement('div');
        indicator.className = `w-3 h-3 rounded-full cursor-pointer transition-colors ${
            i === currentPage ? 'bg-orange-500' : 'bg-gray-300'
        }`;
        indicator.addEventListener('click', () => goToPage(patentId, i));
        indicatorsContainer.appendChild(indicator);
    }

    function updateImages(page) {
        const startIndex = page * imagesPerPage;
        const endIndex = Math.min(startIndex + imagesPerPage, images.length);
        const currentImages = images.slice(startIndex, endIndex);

        const grid = carouselContainer.querySelector(`.patent-images-grid-${patentId}`);
        grid.innerHTML = '';

        currentImages.forEach((imageUrl, index) => {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'relative group flex-shrink-0 patent-image-wrapper';
            const perPage = getImagesPerPage();
            const widthPercentage = 100 / perPage;
            imageContainer.style.width = `${widthPercentage}%`;
            imageContainer.style.minWidth = `${widthPercentage}%`;

            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `專利${patentId}圖片 ${startIndex + index + 1}`;
            img.className = 'w-full h-full object-contain rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer';
            img.loading = 'eager';

            imageContainer.appendChild(img);
            grid.appendChild(imageContainer);
        });

        const prevBtn = carouselContainer.querySelector(`.patent-prev-btn-${patentId}`);
        const nextBtn = carouselContainer.querySelector(`.patent-next-btn-${patentId}`);
        prevBtn.disabled = page === 0;
        nextBtn.disabled = page === totalPages - 1;

        const indicators = indicatorsContainer.querySelectorAll('div');
        indicators.forEach((indicator, index) => {
            indicator.className = `w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === page ? 'bg-orange-500' : 'bg-gray-300'
            }`;
        });
    }

    function goToPage(patentId, page) {
        currentPage = Math.max(0, Math.min(page, totalPages - 1));
        updateImages(currentPage);
    }

    const prevBtn = carouselContainer.querySelector(`.patent-prev-btn-${patentId}`);
    const nextBtn = carouselContainer.querySelector(`.patent-next-btn-${patentId}`);

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateImages(currentPage);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateImages(currentPage);
        }
    });

    updateImages(currentPage);
}

// Initialize all carousels
initializePatentCarousels();
