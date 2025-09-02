import Swal from 'sweetalert2'

export function alertaRedireccion(mensaje, icono, navigate, ruta) {
    let timerInterval;
Swal.fire({
  title: mensaje,
  html: "Serás redireccionado en <b></b> milisegundos.",
  timer: 2000,
  timerProgressBar: true,
  icon: icono,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
    navigate(ruta)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
} 

export function alertaGeneral(){}