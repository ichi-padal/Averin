<template>
  <section class="container contacts">
    <h1>Contacts</h1>
    <hr class="hr-white">
    <div class="contacts__row">
      <div>
        <div class="contacts__info-section">
          <h5 class="color-secondary">phone number</h5>
          <a class="contacts__link"  title="phone" href="tel:+380684447007">
            +38 068 444 70 07
          </a>
        </div>
        <div class="contacts__info-section">
          <h5 class="color-secondary">adres</h5>
          <a class="contacts__link"  title="adres" href="https://www.google.com/maps/place/50%C2%B024'31.6%22N+30%C2%B032'41.8%22E/@50.4087854,30.5427543,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x40d4cf4262a329e7:0x9a4d20de351451c1!2z0YPQuy4g0JzQuNGF0LDQuNC70LAg0JTRgNCw0LPQvtC80LjRgNC-0LLQsCwgMTUsINCa0LjQtdCyLCAwMjAwMA!3b1!8m2!3d50.408789!4d30.5449542!3m5!1s0x0:0x0!7e2!8m2!3d50.4087821!4d30.5449435">
            Dragomyrova st.15
          </a>
        </div>
        <div class="contacts__info-section">
          <h5 class="color-secondary">email</h5>
          <a class="contacts__link" title="email" href="mailto:AverinDc@gmail.com">
            AverinDc@gmail.com
          </a>
        </div>
        <div class="contacts__info-section">
          <a class="social__link" href="#" title="instagram">instagram</a>
          <a class="social__link" href="#" title="facebook">facebook</a>
        </div>
      </div>
      <div>
        <form id="contact" action="#">
          <h2 class="form__title color-secondary">Get in <em>touch</em></h2>
          <input class="input__text required phone" type="tel" name="form_phone" required placeholder="Your phone number" pattern="^[0-9-+\s()]*$"  title="Phone number with 7-9 and remaing 9 digit with 0-9">
          <input class="input__text required email" type="email" name="form_email" required placeholder="Your email adress" title="Your email adress">
          <div class="button button__contacts button__white">
            <input  class="button__input" type="submit" value="Submit">
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "Contacts",
  // methods: {
  //   submit: function () {
  //     const form = document.querySelector('#contact')
  //     form.addEventListener('submit', formSend);
  //
  //     async function formSend(e) {
  //       e.preventDefault();
  //       let error = formValidate(form);
  //     }
  //
  //     function formValidate(form) {
  //       let error = 0;
  //       let formReq = document.querySelectorAll('.required');
  //
  //       for (let i = 0; i < formReq.length; i++) {
  //         const input = formReq[i];
  //
  //       }
  //     }
  //     function formAddError(input) {
  //       input.parentElement.classList.add('_error');
  //       input.classList.add('_error');
  //     }
  //     function formRemoveError(input) {
  //       input.parentElement.classList.remove('_error');
  //       input.classList.remove('_error');
  //     }
  //   }
  // }
}
</script>

<style lang="scss" >
.contacts {
  background: $color-black;
  color: $color-white;
  width: 100vw;
  min-height: calc(100vh - 3rem);
  height: calc(100% - 3rem);
  padding: 6.5rem 6.6rem 2rem;
  @media (max-width: $breakpoints-max-tablet) {
    padding: 9rem 3rem 2rem;
  }
  @media (max-width: $breakpoints-max-mobile) {
    padding: 6rem 2rem 2rem;
  }
  h1 {
    color: $color-white;
    margin: 0;
    line-height: $h1-font-size;
    @media (max-width: $breakpoints-max-tablet) {
      font-size: $h1-font-size -2vh;
    }
    @media (max-width: $breakpoints-max-mobile) {
      font-size: $h1-font-size * 0.6;
    }
  }
  &__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media print,screen and (max-width: $breakpoints-max-mobile) {
      flex-direction: column;
    }
    & > div{
      &:first-child {
        text-align: left;
        flex-grow: 3;
      }
      &:last-child {
        text-align: center;
        flex-grow: 2;
      }
    }
  }
}

.hr-white {
  margin: 2rem 0;
  @media (max-width: $breakpoints-max-tablet) {
    margin: 1rem 0;

  }
}



.contacts {
  &__info-section {
    h5 {
      text-transform: uppercase;
      font-style: normal;
      font-weight: normal;
      margin: 1rem 0 0 0;
    }
  }
  &__link {
    font-size: $h2-font-size;
    text-decoration: none;
    color: $color-white;
    &:hover {
      color: $color-secondary;
    }
  }
}

.social__link {
  text-transform: uppercase;
  display: inline-block;
  margin: 3rem 3rem 3rem 0;
  text-decoration: none;
  color: $color-white;
  font-size: $h5-font-size;
  &:hover {
    color: $color-secondary;
  }
}


.form__title {
  font-family: Ogg Roman, sans-serif;
  font-weight: normal;

}

.input__text {
  display: block;
  padding: 1rem;
  width: 100%;
  height: auto;
  color: $color-black;
  background-color: $color-white;
  margin-bottom: 1rem;
  text-align: center;
}


.button__input {
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  background-color: transparent;
  border: 0;
  padding: 1rem 3.5rem;
  outline: none;
}

.button {
  display: inline-flex;
  border-width: 0.4px;
  border-style: solid;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  background-color: transparent;
  &__contacts {
    padding: 0;
  }
  &:after {
    display: block;
    right: -11%;
    top: calc(50% - 0.2rem);
    width: 3rem;
    height: 0.4rem;
    content: '';
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg class='button__arrow' viewBox='0 0 67 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M66.6031 4.7233C66.8007 4.52568 66.8007 4.20527 66.6031 4.00764L63.3826 0.787168C63.185 0.589544 62.8646 0.589544 62.6669 0.787168C62.4693 0.984793 62.4693 1.3052 62.6669 1.50283L65.5296 4.36547L62.6669 7.22812C62.4693 7.42574 62.4693 7.74615 62.6669 7.94378C62.8646 8.1414 63.185 8.1414 63.3826 7.94378L66.6031 4.7233ZM0.807129 4.87153L66.2452 4.87152L66.2452 3.85942L0.807129 3.85943L0.807129 4.87153Z' fill='black'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
  }
  &:hover {
    text-decoration: none;
  }
  &__dark {
    border-color: $color-black;
    color: $color-black;
    &:after {
      background-image: url("data:image/svg+xml,%3Csvg class='button__arrow' viewBox='0 0 67 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M66.6031 4.7233C66.8007 4.52568 66.8007 4.20527 66.6031 4.00764L63.3826 0.787168C63.185 0.589544 62.8646 0.589544 62.6669 0.787168C62.4693 0.984793 62.4693 1.3052 62.6669 1.50283L65.5296 4.36547L62.6669 7.22812C62.4693 7.42574 62.4693 7.74615 62.6669 7.94378C62.8646 8.1414 63.185 8.1414 63.3826 7.94378L66.6031 4.7233ZM0.807129 4.87153L66.2452 4.87152L66.2452 3.85942L0.807129 3.85943L0.807129 4.87153Z' fill='black'/%3E%3C/svg%3E");
    }
    &:active {
      border-color: #7E7E7E;
      color: #7E7E7E;
      &:after {
        background-image: url("data:image/svg+xml,%3Csvg class='button__arrow' viewBox='0 0 67 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M66.6031 4.7233C66.8007 4.52568 66.8007 4.20527 66.6031 4.00764L63.3826 0.787168C63.185 0.589544 62.8646 0.589544 62.6669 0.787168C62.4693 0.984793 62.4693 1.3052 62.6669 1.50283L65.5296 4.36547L62.6669 7.22812C62.4693 7.42574 62.4693 7.74615 62.6669 7.94378C62.8646 8.1414 63.185 8.1414 63.3826 7.94378L66.6031 4.7233ZM0.807129 4.87153L66.2452 4.87152L66.2452 3.85942L0.807129 3.85943L0.807129 4.87153Z' fill='%237E7E7E'/%3E%3C/svg%3E");

      }
    }
  }
  &__white {
    border-color: $color-white;
    color: $color-white;
    &:after {
      background-image: url("data:image/svg+xml,%3Csvg class='button__arrow' viewBox='0 0 67 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M66.6031 4.7233C66.8007 4.52568 66.8007 4.20527 66.6031 4.00764L63.3826 0.787168C63.185 0.589544 62.8646 0.589544 62.6669 0.787168C62.4693 0.984793 62.4693 1.3052 62.6669 1.50283L65.5296 4.36547L62.6669 7.22812C62.4693 7.42574 62.4693 7.74615 62.6669 7.94378C62.8646 8.1414 63.185 8.1414 63.3826 7.94378L66.6031 4.7233ZM0.807129 4.87153L66.2452 4.87152L66.2452 3.85942L0.807129 3.85943L0.807129 4.87153Z' fill='white'/%3E%3C/svg%3E");
    }
    &:active{
      border-color: #6F6F6F;
      color: #6F6F6F;
      &:after {
        background-image: url("data:image/svg+xml,%3Csvg class='button__arrow' viewBox='0 0 67 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M66.6031 4.7233C66.8007 4.52568 66.8007 4.20527 66.6031 4.00764L63.3826 0.787168C63.185 0.589544 62.8646 0.589544 62.6669 0.787168C62.4693 0.984793 62.4693 1.3052 62.6669 1.50283L65.5296 4.36547L62.6669 7.22812C62.4693 7.42574 62.4693 7.74615 62.6669 7.94378C62.8646 8.1414 63.185 8.1414 63.3826 7.94378L66.6031 4.7233ZM0.807129 4.87153L66.2452 4.87152L66.2452 3.85942L0.807129 3.85943L0.807129 4.87153Z' fill='%236F6F6F'/%3E%3C/svg%3E");
      }
    }
  }
}
</style>