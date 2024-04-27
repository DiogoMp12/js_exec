function Veiculo(carro, motor, rodas) {
    this.carro = carro;
    this.motor = motor;
    this.rodas = rodas;
}

function ModeloVeiculo(carro, motor, rodas, modeloveiculo) {
    Veiculo.call(this, carro, motor, rodas);
    this.modeloveiculo = modeloveiculo;
}

ModeloVeiculo.prototype = Object.create(Veiculo.prototype);
ModeloVeiculo.prototype.constructor = ModeloVeiculo;

function VelocidadeVeiculo(carro, motor, rodas, velocidadeVeiculo) {
    Veiculo.call(this, carro, motor, rodas);
    this.velocidadeVeiculo = velocidadeVeiculo;
}

VelocidadeVeiculo.prototype = Object.create(Veiculo.prototype);
VelocidadeVeiculo.prototype.constructor = VelocidadeVeiculo;



const carro1 = new ModeloVeiculo("Porsche", "combustão", "traseiras", "911");
const carro2 = new VelocidadeVeiculo("Tesla", "elétrico", "traseiras", "300 km/h");

console.log(carro1);
console.log(carro2);