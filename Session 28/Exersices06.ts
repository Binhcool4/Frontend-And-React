function task1(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task 1 được thực thi');
            resolve();
        }, 1000);
    });
}

function task2(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task 2 được thực thi');
            resolve();
        }, 1500);
    });
}

function task3(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task 3 được thực thi! Hoàn thành');
            resolve();
        }, 2000);
    });
}

task1()
    .then(() => task2())
    .then(() => task3());