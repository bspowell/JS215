function acronym(string) {
  string = string.replace(/-/g, ' ');
  let arr = string.split(' ');
  let newAcro = '';
  arr.forEach(word => newAcro += word[0])
  return newAcro.toUpperCase();
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"