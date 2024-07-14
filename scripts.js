document.addEventListener('DOMContentLoaded', () => {
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

function showProjectDetails(projectId) {
    const projectDetails = {
        project1: {
            title: "Project 1",
            description: "Detailed description of project 1.",
            images: ["project1-1.jpg", "project1-2.jpg"]
        },
        project2: {
            title: "Project 2",
            description: "Detailed description of project 2.",
            images: ["project2-1.jpg", "project2-2.jpg
