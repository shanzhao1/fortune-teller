document.addEventListener('DOMContentLoaded', () => {
    const fortuneForm = document.getElementById('fortuneForm');
    const loadingSection = document.getElementById('loadingSection');
    const resultSection = document.getElementById('resultSection');
    const resetBtn = document.getElementById('resetBtn');
    const progress = document.querySelector('.progress');

    // 模拟加载进度
    function simulateLoading() {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loadingSection.classList.add('hidden');
                    resultSection.classList.remove('hidden');
                }, 500);
            } else {
                width += Math.random() * 15;
                if (width > 100) width = 100;
                progress.style.width = width + '%';
            }
        }, 200);
    }

    // 处理表单提交
    fortuneForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 获取表单数据
        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const birthplace = document.getElementById('birthplace').value;

        // 验证表单
        if (!name || !birthdate || !birthplace) {
            alert('请填写完整信息！');
            return;
        }

        // 隐藏表单，显示加载动画
        fortuneForm.classList.add('hidden');
        loadingSection.classList.remove('hidden');
        progress.style.width = '0%';

        // 开始模拟加载
        simulateLoading();
    });

    // 重置按钮点击事件
    resetBtn.addEventListener('click', () => {
        resultSection.classList.add('hidden');
        fortuneForm.reset();
        fortuneForm.classList.remove('hidden');
    });

    // 添加输入验证
    const nameInput = document.getElementById('name');
    nameInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[<>]/g, '');
    });

    const birthplaceInput = document.getElementById('birthplace');
    birthplaceInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[<>]/g, '');
    });
}); 