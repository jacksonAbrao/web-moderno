// não aceita repetição/não indexada

const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corinthians');
console.log(times);
console.log(times.size);
