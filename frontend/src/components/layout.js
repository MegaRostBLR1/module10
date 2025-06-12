export class Layout {
    constructor() {
        this.burger = document.getElementById("burger");
        this.slider = document.getElementById("slider");
        this.layoutLinks = document.getElementById('layoutLinks');
        this.elementsLi = this.layoutLinks.querySelectorAll('a');
        this.elementsLi.forEach(el => {
            if (el.pathname === location.pathname) {

                if (location.pathname === '/incomes' || location.pathname === '/expenses') {
                    el.closest('details').classList.add('checked');
                    el.closest('li').classList.add('checked-category');
                } else {
                    el.closest('li').classList.add('checked');
                }
            }
        })
        this.burger.onclick = this.clickBurger.bind(this);
    }

    clickBurger() {
        if (this.slider.classList.contains('close')) {
            this.slider.classList.remove('close');
        } else {
            this.slider.classList.add('close');
        }
    }
}

// export class Layout {
//     constructor() {
//         this.burger = document.getElementById("burger");
//         this.slider = document.getElementById("slider");
//         this.layoutLinks = document.getElementById('layoutLinks');
//         this.elementsLi = this.layoutLinks.querySelectorAll('a');
//         // this.highlightActiveLinks();
//         this.burger.onclick = this.clickBurger.bind(this);
//     }
//
//     highlightActiveLinks() {
//         this.elementsLi.forEach(el => {
//             // Удаляем все классы checked у элементов
//             el.closest('li')?.classList.remove('checked', 'checked-category');
//             el.closest('details')?.classList.remove('checked');
//
//             // Проверяем текущий путь
//             if (el.pathname === location.pathname) {
//                 if (location.pathname === '/incomes' || location.pathname === '/expenses') {
//                     el.closest('details')?.classList.add('checked');
//                     el.closest('li')?.classList.add('checked-category');
//                 } else {
//                     el.closest('li')?.classList.add('checked');
//                 }
//             }
//
//             // Дополнительная проверка для вложенных страниц (create, edit и т.д.)
//             if (location.pathname.startsWith('/incomes') && el.pathname === '/incomes') {
//                 el.closest('details')?.classList.add('checked');
//                 el.closest('li')?.classList.add('checked-category');
//             }
//
//             if (location.pathname.startsWith('/expenses') && el.pathname === '/expenses') {
//                 el.closest('details')?.classList.add('checked');
//                 el.closest('li')?.classList.add('checked-category');
//             }
//
//             if (location.pathname.startsWith('/generals') && el.pathname === '/generals') {
//                 el.closest('li')?.classList.add('checked');
//             }
//         });
//     }
//
//     clickBurger() {
//         if (this.slider.classList.contains('close')) {
//             this.slider.classList.remove('close');
//         } else {
//             this.slider.classList.add('close');
//         }
//     }
// }