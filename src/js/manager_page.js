import buildSections from './sections.js';
import buildPersonalInfo from './personal_info.js';
import { buildPersonalInfoForm } from './personal_info.js';


function createProductColumn(info, attribute) {
    const column = document.createElement('div');
    column.classList.add(...['col-md-2', 'col-6', attribute]);
    column.textContent = info;
    return column;
}

function buildStocks(products){
    const container = document.createElement('div');
    container.className = "container";
    const header = document.createElement('div');
    header.className = "row header";

    ['Product', 'Price', 'Stock', 'Delete'].forEach(element => {
        const heading = document.createElement('div');
        heading.className = "col-md-2";
        heading.textContent = element;
        header.appendChild(heading);
    });

    container.appendChild(header);

    products.forEach(product => {
        const row = document.createElement('div');
        row.className = "row table-entry";
        const name = createProductColumn(product.name, 'name');
        const href = document.createElement('a');
        href.href = 'product_page.php';
        href.appendChild(name);
        row.appendChild(href);
        row.appendChild(createProductColumn(product.price, 'price'));
        row.appendChild(createProductColumn(product.stock, 'stock'));
        const col = createProductColumn('', 'delete');
        const icon = document.createElement('i');
        icon.className = "fas fa-trash";
        col.appendChild(icon);
        row.appendChild(col);
        container.appendChild(row);
    });

    const row = document.createElement('div');
    row.className = "row";
    const col = document.createElement('div');
    col.className = "col-md-4 col-12 ml-auto mr-0 pr-0";
    const button = document.createElement('a');
    button.className = "btn btn-primary w-100 mt-3 p-1 edit";
    button.setAttribute('role', 'button');
    button.textContent = 'Edit';
    button.id = "products-button"
    col.appendChild(button);
    row.appendChild(col);
    container.appendChild(row);

    const changeMode = (nodeCreation) => {
        ['name', 'price'].forEach(elementClass => {
            const elements = document.querySelectorAll(`.${elementClass}`);
            elements.forEach(element => element.replaceWith(nodeCreation(element)));
        });
    } 
    col.addEventListener('mousedown', () => {
        if(button.classList.contains('edit')){
            button.classList.remove('edit');
            button.classList.add('changes');
            button.textContent = "Save Changes"
            const generateInputNode = element => {
                const node = document.createElement('input');
                node.className = element.className;
                node.type = 'text';
                node.value = element.textContent;
                return node;
            }; 
            changeMode(generateInputNode);
            document.querySelectorAll('.stock').forEach(stock => {
                const input = generateInputNode(stock);
                input.className = "stock";
                const minus = document.createElement('i');
                minus.className = "far fa-minus-square";
                input.before(minus);
                const plus = document.createElement('i');
                plus.className = "far fa-plus-square";
                input.after(plus);
                minus.addEventListener('mousedown', () => stock.value = Number(stock.value) - 1 );
                plus.addEventListener('mousedown', () => stock.value = Number(stock.value) + 1 );
                const wrapper = document.createElement('div');
                wrapper.className = stock.className;
                wrapper.classList.add('stock-wrapper')
                wrapper.appendChild(minus);
                wrapper.appendChild(input);
                wrapper.appendChild(plus);
                stock.replaceWith(wrapper);
            });

        } else {
            button.classList.remove('changes');
            button.classList.add('edit');
            button.textContent = "Edit"

            changeMode(element => {
                const node = document.createElement('div');
                node.className = element.className;
                node.textContent = element.value;
                return node;
            });

            document.querySelectorAll('div.stock').forEach(stock => {
                const text = document.createElement('div');
                text.className = stock.className;
                text.textContent = stock.querySelector('input').value;
                stock.replaceWith(text);
            });
        }
    });

    return container;
}

function buidlPendingOrders(orders) {
    const container = document.createElement('div');
    container.className = "container";
    const header = document.createElement('div');
    header.className = "row header";

    ['Order #', 'Purchase Date', 'Pending Status', 'Confirm Status'].forEach(element => {
        const heading = document.createElement('div');
        heading.className = "col-md-2";
        heading.textContent = element;
        header.appendChild(heading);
    });

    container.appendChild(header);

    orders.forEach(order => {
        const row = document.createElement('div');
        row.className = "row table-entry";
        const number = createProductColumn(order.number, 'order');
        const href = document.createElement('a');
        href.href = 'order_invoice.php';
        href.appendChild(number);
        row.appendChild(href);
        row.appendChild(createProductColumn(order.date, 'date'));
        row.appendChild(createProductColumn(order.status, 'status'));
        const col = createProductColumn('', 'confirm');
        const button = document.createElement('a');
        button.className = "btn btn-primary confirm-order";
        button.textContent = "Confirm"
        col.appendChild(button);
        row.appendChild(col);
        container.appendChild(row);
    });

    return container;
}

function buildManagers(managers) {
    const container = document.createElement('div');
    container.id = "managers"
    container.className = "container";

    managers.forEach(manager => {
        const row = document.createElement('div');
        row.className = "row table-entry";
        const photo = document.createElement('div');
        const img = document.createElement('img');
        img.src = manager.photo;
        photo.appendChild(img);
        row.appendChild(photo);
        
        const description = document.createElement('div');
        description.className = "col description";
        const heading = document.createElement('h5');
        const parapgrah = document.createElement('p');
        heading.textContent = manager.name;
        parapgrah.textContent = `Added on ${manager.date}`;
        description.appendChild(heading);
        description.appendChild(parapgrah);
        row.appendChild(description);

        const col = document.createElement('span');
        col.className = "delete-button";
        const button = document.createElement('a');
        button.className = "btn btn-secondary";
        const icon = document.createElement('i');
        icon.className = "fas fa-times";
        button.appendChild(icon);
        col.appendChild(button);
        row.appendChild(col);
        container.appendChild(row);
    });

    const row = document.createElement('div');
    row.className = "row";
    const col = document.createElement('div');
    col.className = "col mt-3 mb-3 center";
    const button = document.createElement('button');
    button.className = "btn btn-primary w-100 mt-3";
    button.id = "add-manager";
    button.type = "button"
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#addManager');
    button.textContent = "Add New Manager";
    col.appendChild(button);
    row.appendChild(col);

    const modal = document.createElement('div');
    modal.id = "addManager";
    modal.style.display = "none";
    modal.className = "modal fade";
    modal.tabIndex = -1;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'addManagerLabel');
    modal.setAttribute('aria-hidden', 'true');
    const dialog = document.createElement('div');
    dialog.className = "modal-dialog";
    dialog.setAttribute('role', 'document');
    modal.appendChild(dialog);
    const content = document.createElement('div');
    content.className = "modal-content";
    dialog.appendChild(content);
    const header = document.createElement('div');
    header.className = "modal-header";
    content.appendChild(header);
    const title = document.createElement('h5');
    title.className = "modal-title";
    title.id = "addManagerLabel";
    title.textContent = "Add New Manager";
    header.appendChild(title);
    const closeButton = document.createElement('button');
    closeButton.className = "close";
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('data-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');
    header.appendChild(closeButton);
    const icon = document.createElement('i');
    icon.className = "fas fa-times";
    closeButton.appendChild(icon);

    const body = document.createElement('div');
    body.className = "modal-body";
    body.appendChild(buildPersonalInfoForm({
        username: "",
        email: "",
        photo: "../assets/user.png"
    }))
    content.appendChild(body);

    const footer = document.createElement('div');
    footer.className = "modal-footer";
    const saveButton = document.createElement('button');
    saveButton.className = "btn btn-primary";
    saveButton.setAttribute('data-dismiss', 'modal');
    saveButton.textContent = "Confirm";
    footer.appendChild(saveButton);
    content.appendChild(footer);

    row.appendChild(modal);
    container.appendChild(row);



    return container;
}

const mockProducts = [
    {
        name: 'Rose Orchid',
        price: '20€',
        stock: '43'
    },
    {
        name: 'XPR Vase',
        price: '15€',
        stock: '37'
    },
    {
        name: 'Bonsai CRT',
        price: '35€',
        stock: '12'
    },
    {
        name: 'Orange Tulips',
        price: '10€',
        stock: '134'
    },
    {
        name: '"Meat" Rose',
        price: '30€',
        stock: '15'
    },
    {
        name: 'Red Dahlias',
        price: '13.99€',
        stock: '29'
    },
    {
        name: 'Sativa Prime',
        price: '4.20€',
        stock: '15'
    },
    {
        name: 'Green Palm Tree',
        price: '80€',
        stock: '4'
    },
    {
        name: 'Lavender Premium',
        price: '25€',
        stock: '48'
    },
    {
        name: 'Pond White Lilies',
        price: '40€',
        stock: '126'
    },
    {
        name: 'Sunny\'s Sunflowers',
        price: '30€',
        stock: '37'
    },
    {
        name: 'Baby Blue Vase',
        price: '10€',
        stock: '798'
    },
    {
        name: 'Ceramic Pot',
        price: '30€',
        stock: '37'
    },
    {
        name: 'Supreme Bonsai Pot',
        price: '40€',
        stock: '3'
    },
    {
        name: 'High-tech mower',
        price: '69.99€',
        stock: '30'
    },
    {
        name: 'Blue Garden Gloves',
        price: '9€',
        stock: '547'
    },
    {
        name: 'Electric Grass Cutter',
        price: '27€',
        stock: '12'
    },
    {
        name: 'Green Watercan 12L',
        price: '5€',
        stock: '228'
    },
];

const mockOrders = [
    {
        number: "125885",
        date: "Feb 24 2020",
        status: "Ready for Shipping" 
    },
    {
        number: "125877",
        date: "Dec 24 2019",
        status: "Sent" 
    },
]

const mockManagers = [
    {
        name: "Sisay Jeremiah",
        photo: "../assets/sisay_jeremiah_small.jpg",
        date: "Nov 24 2019"
    },
    {
        name: "Dannie Almir",
        photo: "../assets/dannie_almir.jpg",
        date: "Mar 8 2020"
    },
    {
        name: "Suzana Constância",
        photo: "../assets/suzana_constancia.jpg",
        date: "Jan 1 2020"
    },
    {
        name: "Mohammad Faruque",
        photo: "../assets/mohammad-faruque-AgYOuy8kA7M-unsplash.jpg",
        date: "Aug 17 2016"
    },
]

const managerProfileSections = [
    {
        name: "Manager Information",
        action: () => buildPersonalInfo({
            username: "simone.biles",
            email: "simone.biles.the.goat@gmail.com",
            photo: "../assets/simone.jpeg"
        })    
    },
    {
        name: "Stocks",
        action: () => buildStocks(mockProducts)
    },
    {
        name: "Pending Orders",
        action: () => buidlPendingOrders(mockOrders)
    },
    {
        name: "Managers",
        action: () => buildManagers(mockManagers)
    }
];


buildSections(managerProfileSections);