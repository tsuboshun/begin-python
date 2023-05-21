window.addEventListener("load", func=()=>{
    const external_links = document.querySelectorAll("a.external");
    for(let i=0; i<external_links.length; i++){
        external_links[i].setAttribute("target", "_blank");
        external_links[i].setAttribute("rel", "noopener noreferrer");
    }
});

let text_close = "解答はこちら";
let text_open = "閉じる";

document.addEventListener('DOMContentLoaded', (event) => {
    const detailsElements = document.querySelectorAll('.toggle-details');
    
    detailsElements.forEach(detailsElement => {
        const summaryElement = detailsElement.querySelector('.toggle-details__summary-text');
        
        if (detailsElement.hasAttribute('open')) {
            summaryElement.innerText = text_open;
        } else {
            summaryElement.innerText = text_close;
        }
        
        detailsElement.addEventListener('click', () => {
            setTimeout(() => {
                if (detailsElement.hasAttribute('open')) {
                    summaryElement.innerText = text_open;
                } else {
                    summaryElement.innerText = text_close;
                }
            }, 0);
        });
    });
});