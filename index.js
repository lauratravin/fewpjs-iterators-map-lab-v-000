const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map( function(tutorial){
         tutorial =  tutorial.split(' ')
         for(let t = 0; t < tutorial.length; t++ ){
          tutorial[t] =  tutorial[t].charAt(0).toUpperCase()+tutorial[t].slice(1)
         }
         return tutorial.join(' ')
  } )
}
