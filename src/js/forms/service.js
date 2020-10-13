import Notice from "../modules/notifications";
import $ from "jquery";
import Modal from "../modules/modals";
import {Email, Data} from "./smtp";
const modal = new Modal();
let form = ".js-service-form";

$(form).each(function(){

var form = $(this);
$(this).validate({
  rules: {
    name: {
      required: false
    },
    phone: {
      required: true,
      minlength: 18,
    },
  },
  messages: {
    name: {
      required: "Введите имя",
    },
    phone: {
      required: "Введите телефон",
    },
  },
  submitHandler: function(form) {
    let $form = $(form);
    let formData = $form.serializeArray();

    let service = $('#service .modal-title').text();

    Email.send({
        SecureToken : Data.SecureToken,
        To : Data.to,
        From : Data.from,
        Subject : "Обращение за услугой адвоката",
        Body : `
        <p>Имя: ${formData[0].value}</p>
        <p>Телефон: ${formData[1].value}</p>
        <p>Услуга: ${service}</p>`
    }).then(
      message => {
        if($('body').hasClass('modal-body')){
          modal.hideModal();
        }
        Notice.openSuccess("Заявка отправлена!");
        $form.get(0).reset();
      }
    );

    return false;
  },
});
})