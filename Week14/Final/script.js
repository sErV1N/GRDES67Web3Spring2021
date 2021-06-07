var shoppingCart = function () {
    var obj = {},
        items = [];

    obj.AddItem = function (itemNo, quantity, price) {
        var item = {};
        item.itemNo = itemNo;
        item.quantity = quantity;
        item.price = price;
        items.push(item)
    };

    obj.GetAllItems = function () {
        return items;
    };

    obj.GetItemByNo = function (item) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].itemNo === item)
                return item[i];
        }
        return null;
    };

    obj.CalculateTotal = function () {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total = total + (items[i].quantity * items[i].price);
        }
        return total;
    };

    return obj;
};
var cart = new shoppingCart();

// JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

//modal
  window.addEventListener("load", function () {
    //let mymodal = document.getElementById("exampleModal");//
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
    console.log(myModal);
    console.log(bootstrap);
    myModal.show();
  
  })