const check = (data: string | number) => {
    if (typeof data === "string") {
        console.log(`${data.length} ki tu`);
    } else {
        if (data % 2 === 0) {
            console.log("Day la so chan");
        } else {
            console.log("Day la so le");
        }
    }
}

check("Demo123");
check(10);