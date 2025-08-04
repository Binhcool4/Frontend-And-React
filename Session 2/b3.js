const typeConsole = (type = "log") => {
    let message = `Đây là type: ${type}`;
    switch (type) {
        case "log":
            console.log(message);
            break;
        case "warn":
            console.warn(message);
            break;
        case "error":
            console.error(message);
            break;
        default:
            console.log(`Đây là type: ${type}`);
    }
};

typeConsole("log");
typeConsole("warn");
typeConsole("error");
typeConsole();