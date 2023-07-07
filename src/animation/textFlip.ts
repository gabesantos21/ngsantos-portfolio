// const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let interval = 0;

export default function FlipTextAnimation(
  event: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
) {
  {
    let iteration = 0;
    const target = event.target as HTMLParagraphElement;
    const value = target?.dataset?.value;

    console.log(event);

    clearInterval(interval);

    interval = setInterval(() => {
      target.innerText = target.innerText
        .split('')
        .map((_letter, index) => {
          if (index < iteration) {
            return value && value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');

      if (iteration >= target.innerText.length) {
        clearInterval(interval);
      }

      iteration += 0.9;
    }, 30);
  }
}
