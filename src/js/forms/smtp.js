/* SmtpJS.com - v3.0.0 */

export const Data = {
  from: "webkrd@mail.ru",
  to: "webkrd@mail.ru",
  SecureToken: "2d2377b0-8127-40be-8c3a-11f620df5712",
};
export const Email = {
  send: function(a) {
    return new Promise(function(n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) {
        n(e);
      });
    });
  },
  ajaxPost: function(e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (a.onload = function() {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  },
  ajax: function(e, n) {
    var t = Email.createCORSRequest("GET", e);
    (t.onload = function() {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  },
  createCORSRequest: function(e, n) {
    var t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    );
  },
};
