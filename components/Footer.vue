<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div class="row footer__columns">
        <div class="col-md-3 footer__columns__col">
          <span>Тендеры</span>
          <div>
            <button type="button" class="btn btn-primary">Добавить тендер</button>
          </div>
          <div>Каталог тендеров</div>
          <div class="mt-4">Работа с клиентами</div>
          <div>Управление проектами</div>
          <div>Управление проектами</div>
          <div>Маркетинг</div>
          <div>Финансы</div>
          <div>Управление бизнесом</div>
        </div>
        <div class="col-md-3 footer__columns__col">
          <span>Компании</span>
          <div>
            <button type="button" class="btn btn-danger">Добавить компанию</button>
          </div>
          <div>Рейтинги</div>
          <div>Отраслевая специализация</div>
          <div class="mt-4">Интеграторы</div>
          <div>Решения для бизнеса крепеж</div>
          <div>Разработка сайтов</div>
          <div>Мобильные приложения</div>
          <div>Онлайн-реклама</div>
          <div>Контент</div>
        </div>
        <div class="col-md-3 footer__columns__col">
          <span>Продукты</span>
          <div>Рейтинги</div>
          <div>По отраслям</div>
          <div class="mt-4">Работа с клиентами</div>
          <div>Управление проектами</div>
          <div>Маркетинг</div>
          <div>Финансы</div>
          <div>Управление бизнесом</div>
        </div>
        <div class="col-md-3 footer__columns__col">
          <span>Кейсы</span>
          <div>Автоматизация сантехников</div>
          <div>Автоматизация клининга</div>
          <div>Автоматизация СТО</div>
          <div>Автоматизация сантехников</div>
          <div>Автоматизация клининга</div>
          <div>Автоматизация СТО</div>
        </div>
      </div>
      <div class="row footer__social">
        <div class="footer__social__left">
          <img src="/svg/facebook.svg" />
          <img src="/svg/vk.svg" />
          <img src="/svg/youtube.svg" />
        </div>
        <div class="footer__social__right">
          <div>О проекте</div>
          <div>Пользовательское соглашение</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'Footer',
  setup() {

  }
}
</script>




<style lang="scss" scoped>
.footer-wrapper {
  border-top: 1px solid var(--color-gray);
  margin: 30px 0;

  .footer {
    max-width: 1200px;
    margin: auto;
    margin-top: 30px;

    &__columns {
      &__col {
        span {
          font-size: 16px;
          font-weight: bold;
        };
        div {
          margin-top: 10px;
        }
      }
    }

    &__social {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__left, &__right {
        display: flex;
        align-items: center;

        & > div {
          margin-right: 10px;
        }
      }

      &__left img {
        margin-right: 10px;
        cursor: pointer;
      }

      &__right {
        justify-content: flex-end;
        color: var(--color-gray);
        & > div {
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
}

</style>
