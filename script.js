document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const startButton = document.getElementById('startButton');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const unfoldButton = document.getElementById('unfoldButton');
    const finalGreetingElement = document.getElementById('finalGreeting');

    const steps = {
        step1: document.getElementById('step1'),
        step2: document.getElementById('step2'),
        step3: document.getElementById('step3'),
        step4: document.getElementById('step4')
    };

    const recipientName = "Amrita";
    const messageGreeting = "Happy Birthday Mine Love ❤️🌹🥰..";

    function transitionToStep(targetStepId) {
        const currentActive = document.querySelector('.step.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        steps[targetStepId].classList.add('active');
    }

    startButton.addEventListener('click', () => {
        transitionToStep('step2');
        backgroundMusic.play().catch(error => {
            console.log("Autoplay prevented:", error);
        });
    });

    envelopeContainer.addEventListener('click', () => {
        envelopeContainer.classList.add('open');
        envelopeContainer.querySelector('.click-instruction').style.opacity = '0';
        setTimeout(() => {
            transitionToStep('step3');
            setTimeout(() => {
                document.getElementById('letterContainer').classList.add('show');
            }, 100);
        }, 700);
    });

    unfoldButton.addEventListener('click', () => {
        transitionToStep('step4');
        startCelebrationAnimations();
    });

    function startCelebrationAnimations() {
        let i = 0;
        finalGreetingElement.textContent = '';
        finalGreetingElement.style.borderRight = '3px solid var(--accent-yellow)';
        
        const fullText = `Happy Birthday, ${recipientName}! ✨`;
        
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                finalGreetingElement.textContent += fullText.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
                finalGreetingElement.style.borderRight = 'none';
                createConfetti();
            }
        }, 100);
    }

    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
});
