const buildCount = (i) => {
    let count = i;

    const displayCount = () => {
        console.log(count++);
    }

    return displayCount;
}

const myCount = buildCount(1);
const myOtherCount = buildCount(10);

myCount();
myCount();
myCount();

myOtherCount();
myOtherCount();