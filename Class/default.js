const paragraph = document.getElementById('x')

const computedFontSize = window.getComputedStyle(paragraph).fontSize

console.log('불릿이 달린 문장의 폰트 사이즈는 ',computedFontSize)