import Notice from "../modules/notifications";
import $ from "jquery";
import Modal from "../modules/modals";
import {Email, Data} from "./smtp";
const modal = new Modal();
let form = ".js-consult-form";

$(form).each(function(){

var form = $(this);
$(this).validate({
  rules: {
    name: {
      required: false
    },
    question: {
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

    Email.send({
        SecureToken : Data.SecureToken,
        To : Data.to,
        From : Data.from,
        Subject : "Получить консультацию адвоката",
        Body : `<p>Вопрос: ${formData[0].value}</p>
        <p>Имя: ${formData[1].value}</p>
        <p>Телефон: ${formData[2].value}</p>`
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