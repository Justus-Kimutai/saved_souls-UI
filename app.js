const submitBtn = document.querySelector('.submit-btn')

// const backEndURL = 'https://evangelism.onrender.com'

submitBtn.addEventListener('click',async ()=>{
    console.log('clicked');
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const region = document.getElementById('region').value
    const village = document.getElementById('village').value

    if(!name || !phone || !region || !village ){
        console.log('cant be empty');
        return;
    }

    try {
        await fetch(`https://evangelism.onrender.com/save-soul`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, phone, region, village }),
        });
        alert('Post added successfully!');
      } catch (error) {
        console.error(error);
      }
})


