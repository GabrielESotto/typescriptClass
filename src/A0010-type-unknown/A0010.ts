let xis: unknown;

xis = 100;
xis = 'Lui';
xis = 900;
xis = 10;

const y = 800;

if (typeof xis === 'number') console.log(xis + y);

// unknown é um any mais seguro pois tem que fazer checagem do tipo
