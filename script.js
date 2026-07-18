// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ===== MAIN TABS =====
    const tabButtons = document.querySelectorAll('.tab-btn:not(.star-block-tab-btn)');
    const tabPanels = document.querySelectorAll('.tab-panel:not(.star-block-tab-panel)');

    function switchTab(tabId) {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedPanel = document.getElementById(tabId);
        
        if (selectedButton && selectedPanel) {
            selectedButton.classList.add('active');
            selectedPanel.classList.add('active');
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // ===== BLOCK TABS (inside bottom content) =====
    const blockTabButtons = document.querySelectorAll('.star-block-tab-btn');
    const blockTabPanels = document.querySelectorAll('.star-block-tab-panel');

    function switchBlockTab(tabId) {
        blockTabButtons.forEach(btn => btn.classList.remove('active'));
        blockTabPanels.forEach(panel => panel.classList.remove('active'));

        const selectedButton = document.querySelector(`[data-blocktab="${tabId}"]`);
        const selectedPanel = document.getElementById(tabId);
        
        if (selectedButton && selectedPanel) {
            selectedButton.classList.add('active');
            selectedPanel.classList.add('active');
        }
    }

    blockTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-blocktab');
            switchBlockTab(tabId);
        });
    });

    // Keyboard navigation
    document.querySelectorAll('.tab-btn, .star-block-tab-btn').forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Make functions accessible
    window.switchTab = switchTab;
    window.switchBlockTab = switchBlockTab;
});