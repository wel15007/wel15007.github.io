window.addEventListener("load", (event)=> {
    const updated = document.querySelector("#lastUpdatedDate");
    updated.textContent = document.lastModified;

    const copy = document.querySelector("#copyrightYear");
    copy.textContent = new Date().getFullYear();
})