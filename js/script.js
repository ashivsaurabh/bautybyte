 
    var fescon = document.getElementById("features-container");

    const data = [
      {
        icon: '<i class="fa-solid fa-bag-shopping"></i>',
        heading: 'Curated beauty & skincare content 1',
        para: 'At BeautyByte, we believe beauty follow the latest skincare trends, or shop premium products, we have got you covered'
      },
      {
        icon: '<i class="fa-solid fa-bag-shopping"></i>',
        heading: 'Curated beauty & skincare content 2',
        para: 'At BeautyByte, we believe beauty follow the latest skincare trends, or shop premium products, we have got you covered'
      },
      {
        icon: '<i class="fa-solid fa-bag-shopping"></i>',
        heading: 'Curated beauty & skincare content 3',
        para: 'At BeautyByte, we believe beauty follow the latest skincare trends, or shop premium products, we have got you covered'
      },
      {
        icon: '<i class="fa-solid fa-bag-shopping"></i>',
        heading: 'Curated beauty & skincare content 4',
        para: 'At BeautyByte, we believe beauty follow the latest skincare trends, or shop premium products, we have got you covered'
      }
    ];

    const feacontent = data.map(function (fea) {
      return `<div class="col features-box">
              <div>${fea.icon}</div>
              <h4>${fea.heading}</h4>
              <p>${fea.para}</p>
            </div>`;
    }).join('');

    fescon.innerHTML = feacontent;