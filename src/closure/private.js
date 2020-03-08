/* Javascript no fomenta el uso de variables privadas.
Con closures pueden usarse para crear variables que solamente pueden ser accedidas por métodos. */
const person = () => {
    var saveName = 'Name';
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
}

const newPerson = person();

console.log(newPerson.getName());

newPerson.setName('Nicole');

console.log(newPerson.getName());