const facts = document.querySelector("#facts");
import {CountUp} from 'countup.js'; 

export const bindFactsPart = (data) => {
    facts.innerHTML = '';
    data.forEach(fact => {
        facts.innerHTML += ` 
        <div class="col-lg-3 col-sm-6">
            <div class="items">
                <span class="fa fa-skyatlas"></span>
                <h3>
                    <span class="counter">${fact.counter}</span></h3>
                <div class="line mx-auto"></div>
                <h4>${fact.title}</h4>
            </div>
        </div>`;
    });

    const counters = document.querySelectorAll(".counter"); 
    counters.forEach(counter => {
        const countUp = new CountUp(counter, counter.textContent); 
        if (!countUp.error) {
            countUp.start(); 
        }
    });
}
