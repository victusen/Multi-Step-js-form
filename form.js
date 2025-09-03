
// I am Vic. A teacher/tutor, a designer and Web Developer.

// Let the Real work Begin. 

// Local Variables 
let arcadeMonthly = 9;
let advancedMonthly = 12;
let proMonthly = 15;
let onlineMonthly = 1;
let storageMonthly = 2;
let profileMonthly = 2;

let arcadeYearly = 90;
let advancedYearly = 120;
let proYearly = 150;
let onlineYearly = 10;
let storageYearly = 20;
let profileYearly = 20;

const monthly = [arcadeMonthly, advancedMonthly, proMonthly];
const yearly = [arcadeYearly, advancedYearly, proYearly];

const monthly2 = [onlineMonthly, storageMonthly, profileMonthly];
const yearly2 = [onlineYearly, storageYearly, profileYearly];

const total = document.querySelector('#total');

const pages = document.querySelectorAll('.right-page > div');
const topNavs = document.querySelectorAll('.left-page-nav > div');

const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.prev');

const pay = document.querySelectorAll('#pay');
const fees = document.querySelectorAll('.fee');
const hiddenInfo = document.querySelectorAll('.extra');

const items = document.querySelectorAll('.items'); 
let activeElement = document.querySelector('.items.active'); 
let planItem = document.querySelector('.items.active .plan'); 

const planChoice = document.getElementById('js-plan-choice');
const planPrice = document.getElementById('plan-price-js');
const changeButton = document.querySelector('.change');

const circle = document.querySelector('circle');
const rectangle = document.querySelector('rect');
const toggleBarText = document.querySelectorAll('.toggle-bar > p');
const totalPerDuration = document.querySelector('#total-ison')

const checkElements = document.querySelectorAll('.check-item');
let activeCheckbox = document.querySelectorAll('.check-item.active');

const checkBox = document.querySelectorAll('input[type="checkbox"]');
const textInputs = document.querySelectorAll('input[type="text"]');
const mailInput = document.querySelector('input[type="email"]');

const topNavsArray = Array.from(topNavs); 
const nextBtnArray = Array.from(nextBtn); 
const prevBtnArray = Array.from(prevBtn); 
const pagesArray = Array.from(pages);

const itemsArray = Array.from(items); 
let activeCheckArray = Array.from(activeCheckbox);

const orderContainer = document.querySelector('.form-array-container');

let activeCheckParent;
let arrayPriceValue;

let orderId = 0;

// The real work Begins: To toggle the navs and handle the next/Prev buttons. 

nextBtnArray.forEach(button => {
  button.addEventListener('click', () => {

    for (let i = 0; i < textInputs.length; i++) {
      const text = textInputs[i];
      if (mailInput.value === '' || text.value === '') {
        alert('Kindly fill in the form fields to proceed.');
        return;
      }
    }
    
    const parentPage = button.closest('.right-page > div'); 
    parentPage.style.display = 'none'; 

    const nextPage = parentPage.nextElementSibling; 
    nextPage.style.display = 'flex'; 

    currentPage = (nextBtnArray.indexOf(button) + 2); 

    toggleTopLeftNavs(); 

    console.log(`Page${currentPage} is on.`); 

    if (pages[pages.length - 1].style.display === 'flex') { 
      alert(`Thanks for viewing Vic's project. Kindly click the ok button now.`); 
    } 
  }); 
}) 
for(i = 0; i < prevBtnArray.length; i++) {
  const button = prevBtnArray[i];
  button.addEventListener('click', () => {
    
    const parentPage = button.closest('.right-page > div');
    parentPage.style.display = 'none';

    const nextPage = parentPage.previousElementSibling;
    nextPage.style.display = 'flex';

    currentPage = (prevBtnArray.indexOf(button));

    toggleTopLeftNavs();

    console.log(`Page${currentPage} is back.`);
  });
}
function toggleTopLeftNavs() {

  topLeftDiv = topNavsArray[currentPage - 1];
  topNavs.forEach(nav => {
    nav.querySelector('div').id = '';
  });
  if (topLeftDiv === undefined) {
    return;
  }
  const numberNav = topLeftDiv.querySelector('div');
  numberNav.id = 'active-nav';
}

// When the rectangle is clicked 
rectangle.addEventListener('click', () => {
  items.forEach(item => {
    item.classList.toggle('height');   
  });

  circle.classList.toggle('circle');

  toggleBarText.forEach(p => {
    p.classList.toggle('month'); 
  });

  hiddenInfo.forEach(info => {
    info.style.display = info.style.display === 'none' ? info.style.display = 'block' : info.style.display = 'none';
    info.style.color = 'var(--Blue-950)';
    info.style.marginTop = '1px';
  });

  checkSVGPosition();

  updateAddOnsDropdown();

  console.log(planItem.innerHTML);
  
  planChoice.innerHTML = `${planItem.innerHTML} (${isOn})`;
  
});

let isOn;
function checkSVGPosition() {
  if (circle.classList.contains('circle')) {
    isOn = `Yearly`;
    updateProPrice();
  } else {
    isOn = `Monthly`;
    updateMonthlyPrice();
  }

  console.log(isOn); 
}

checkSVGPosition();

function updateMonthlyPrice() {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemChild = item.querySelector('#pay');

    item.value = monthly[i]; 
    if (itemsArray.indexOf(activeElement) === i) {
      planPrice.innerHTML = `$${items[i].value}/mo`;
      // console.log(planPrice); 
    }
    // console.log(item.value); 
    itemChild.innerHTML = `$${monthly[i]} /mo`;
  }

  planChoice.innerHTML = `${planItem.innerHTML} (${isOn})`;
  console.log(planPrice.innerHTML);
  
  for (let i = 0; i < fees.length; i++) {
    const item = fees[i];
    const itemParent = item.closest('.check-item');

    itemParent.value = monthly2[i]; 
    // console.log(itemParent.value);  

    // if (activeCheckArray.indexOf(itemParent) === i) {
      
    //   // activeCheckParent = activeCheckArray[i];
    //   console.log(itemParent);

    //   arrayPriceValue = `$${activeCheckArray[i].value}/mo`;
    // }

    item.innerHTML = `+$${monthly2[i]}/mo`; 
  }
}
function updateProPrice() {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemChild = item.querySelector('#pay');

    item.value = yearly[i];

    if (itemsArray.indexOf(activeElement) === i) {
      planPrice.innerHTML = `$${items[i].value}/yr`; 
    }
    // console.log(item.value);
    itemChild.innerHTML = `$${yearly[i]} /yr`;
  }

  planChoice.innerHTML = `${planItem.innerHTML} (${isOn})`;
  console.log(planPrice.innerHTML);
  
  for (let i = 0; i < fees.length; i++) {
    const item = fees[i];
    const itemParent = item.closest('.check-item');
    // console.log(itemParent);   

    itemParent.value = yearly2[i];
    // console.log(itemParent.value);

    // if (activeCheckArray.indexOf(itemParent) === i) { 
    //   arrayPriceValue = `$${itemParent.value}/mo`;
    // }

    item.innerHTML = `+$${yearly2[i]}/yr`; 
  }
} 

function updateClickedItem() {
  items.forEach(element => {
    element.addEventListener('click', () => {

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.classList.remove('active');
      }
      
      element.classList.toggle('active');

      activeElement = element;
      console.log(activeElement.value);
      
      const planName = element.querySelector('.plan');
      planItem = planName;

      console.log(planItem);
      
      planChoice.innerHTML = `${planName.innerHTML} (${isOn})`;

      if (isOn === 'Yearly') {
        planPrice.innerHTML = `$${activeElement.value}/yr`;
      } else {
        planPrice.innerHTML = `$${activeElement.value}/mo`;
      }

    });
    
  });
}

updateClickedItem();

function updateCheckedItems() {
  checkElements.forEach(checks => {

    const childCheckbox = checks.querySelector('input');
    if (checks.classList.contains('active')) {
      childCheckbox.checked = true;
    } else {
      childCheckbox.checked = false;
    }

    checks.addEventListener('click', () => {
      checks.classList.toggle('active');

      // if/else statement starts
      if (childCheckbox.checked === true) {
        console.log('false!'); 
        childCheckbox.checked = false;

        let index = activeCheckArray.indexOf(checks);
        activeCheckArray.splice(index, 1);
        // console.log(activeCheckArray);

        updateAddOnsDropdown();
      } else {
        console.log('true!');
        childCheckbox.checked = true;
        
        activeCheckArray.push(checks); 
        // console.log(activeCheckArray);

        updateAddOnsDropdown();
      }
      // if/else statement ends 
    });
  });
  updateAddOnsDropdown();
} 

updateCheckedItems();

checkBox.forEach(box => {
  box.addEventListener('click', () => {
    box.checked = box.checked === true ? box.checked = false : box.checked = true;
  });
});

// To edit the form again 
changeButton.addEventListener('click', () => {
  pages.forEach(page => {
    page.style.display = 'none';
  })

  currentPage = 2;
  pagesArray[currentPage - 1].style.display = 'flex';

  toggleTopLeftNavs();
});

function updateAddOnsDropdown() {
  console.log(activeCheckArray);  

  let orderDivs;

  orderContainer.innerHTML = '';

  let checkValueTotal = 0;

  for (let i = 0; i < activeCheckArray.length; i++) {
    const element = activeCheckArray[i];

    if (isOn === 'Monthly') { 
      arrayPriceValue = `$${element.value}/mo`;
    } else if (isOn === 'Yearly') {
      arrayPriceValue = `$${element.value}/yr`;
    }
    
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order';
    orderDiv.id = orderId + 1;

    orderDiv.innerHTML = `<p>${element.id}</p><p class="bold" id="service-price">${arrayPriceValue}</p>`; 

    checkValueTotal = checkValueTotal + element.value;
    orderDivs = orderDiv;
    orderContainer.appendChild(orderDiv);
    // console.log(orderDiv);
  }

  console.log(checkValueTotal);
  
  if (isOn === 'Monthly') { 
    totalPerDuration.innerHTML = `Total (per month)`;
    total.innerHTML = `$${checkValueTotal + activeElement.value}/mo`;
  } else if (isOn === 'Yearly') {
    totalPerDuration.innerHTML = `Total (per year)`;
    total.innerHTML = `$${checkValueTotal + activeElement.value}/yr`;
  }
}


