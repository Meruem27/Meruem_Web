document.addEventListener('DOMContentLoaded', () => {
    function generateCaptcha() {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += chars[Math.floor(Math.random() * chars.length)];
        }
        return captcha;
    }

    function refreshCaptcha(captchaElementId) {
        const captcha = generateCaptcha();
        document.getElementById(captchaElementId).textContent = captcha;
        return captcha;
    }

    let loginCaptcha = refreshCaptcha('login-captcha-value');
    let registerCaptcha = refreshCaptcha('register-captcha-value');

    document.getElementById('login-refresh-captcha').addEventListener('click', () => {
        loginCaptcha = refreshCaptcha('login-captcha-value');
    });

    document.getElementById('register-refresh-captcha').addEventListener('click', () => {
        registerCaptcha = refreshCaptcha('register-captcha-value');
    });

    document.getElementById('login-button').addEventListener('click', () => {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
    });

    document.getElementById('register-button').addEventListener('click', () => {
        document.getElementById('register-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
    });

    document.getElementById('close-login').addEventListener('click', () => {
        document.getElementById('login-form').style.display = 'none';
    });

    document.getElementById('close-register').addEventListener('click', () => {
        document.getElementById('register-form').style.display = 'none';
    });

    document.getElementById('loginForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const account = document.getElementById('login-account').value;
        const password = document.getElementById('login-password').value;
        const captcha = document.getElementById('login-captcha').value;

        if (captcha === loginCaptcha) {
            alert(`登录成功，欢迎 ${username}!`);
            document.getElementById('login-form').style.display = 'none';
            showUser(username);
            localStorage.setItem('username', username);
        } else {
            alert('验证码错误，请重试。');
            loginCaptcha = refreshCaptcha('login-captcha-value');
        }
    });

    document.getElementById('registerForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const account = document.getElementById('register-account').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const gender = document.getElementById('gender').value;
        const captcha = document.getElementById('register-captcha').value;

        if (captcha !== registerCaptcha) {
            alert('验证码错误，请重试。');
            registerCaptcha = refreshCaptcha('register-captcha-value');
            return;
        }

        if (password !== confirmPassword) {
            alert('两次输入的密码不同，请重试。');
            return;
        }

        alert(`注册成功，欢迎 ${username}!`);
        document.getElementById('register-form').style.display = 'none';
        showUser(username);
        localStorage.setItem('username', username);
    });

    document.getElementById('logout-button').addEventListener('click', () => {
        localStorage.removeItem('username');
        hideUser();
    });

    function showUser(username) {
        document.getElementById('login-button').style.display = 'none';
        document.getElementById('register-button').style.display = 'none';
        const userInfoElement = document.getElementById('user-info');
        userInfoElement.style.display = 'inline';
        document.getElementById('user-name').textContent = username;
    }

    function hideUser() {
        document.getElementById('login-button').style.display = 'inline';
        document.getElementById('register-button').style.display = 'inline';
        document.getElementById('user-info').style.display = 'none';
    }

    const username = localStorage.getItem('username');
    if (username) {
        showUser(username);
    } else {
        hideUser();
    }
});
