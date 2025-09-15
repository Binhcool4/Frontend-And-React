function delayedCallback(callback: () => void, delay: number): void {
    setTimeout(callback, delay);
}
delayedCallback(() => {
    console.log("Đã delay!");
}, 3000);