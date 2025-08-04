let user = {
    name: "John",
    age: 25,
    location: {
        city: "Hanoi",
        country: "Vietnam"
    },
    contact: {
        email: "john@example.com",
        phone: "0123456789"
    },
    job: {
        title: "Developer",
        company: "Tech Corp"
    }
}


function displayUserInfo(user) {
    const jobTitle = user.job?.title || 'unknown';
    const jobCompany = user.job?.company || 'unknown';
    const contactEmail = user.contact?.email || 'unknown';
    const contactPhone = user.contact?.phone || 'unknown';
    console.log(`${user.name} is ${user.age} years old, lives in ${user.location.city}, ${user.location.country}, works as ${jobTitle} at ${jobCompany}, and can be contacted via ${contactEmail} or ${contactPhone}.`);
}

displayUserInfo(user);