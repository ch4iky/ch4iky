// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ===== MAIN TABS =====
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

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

    // ===== BLOCK TABS =====
    const blockTabButtons = document.querySelectorAll('.block-tab-btn');
    
    blockTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parent = this.closest('.block-tabs');
            const tabId = this.getAttribute('data-blocktab');
            
            // Remove active from all buttons in this block
            parent.querySelectorAll('.block-tab-btn').forEach(btn => btn.classList.remove('active'));
            // Remove active from all panels in this block
            parent.querySelectorAll('.block-tab-panel').forEach(panel => panel.classList.remove('active'));
            
            // Activate clicked button
            this.classList.add('active');
            // Activate corresponding panel
            const panel = parent.querySelector(`#${tabId}`);
            if (panel) panel.classList.add('active');
        });
    });

    // ===== STAR BLOCK TABS =====
    const starBlockTabButtons = document.querySelectorAll('.star-block-tab-btn');
    
    starBlockTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parent = this.closest('.star-block-tabs');
            const tabId = this.getAttribute('data-blocktab');
            
            // Remove active from all buttons in this block
            parent.querySelectorAll('.star-block-tab-btn').forEach(btn => btn.classList.remove('active'));
            // Remove active from all panels in this block
            parent.querySelectorAll('.star-block-tab-panel').forEach(panel => panel.classList.remove('active'));
            
            // Activate clicked button
            this.classList.add('active');
            // Activate corresponding panel
            const panel = parent.querySelector(`#${tabId}`);
            if (panel) panel.classList.add('active');
        });
    });

    // Keyboard navigation
    document.querySelectorAll('.tab-btn, .block-tab-btn, .star-block-tab-btn').forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Make functions accessible
    window.switchTab = switchTab;
});
