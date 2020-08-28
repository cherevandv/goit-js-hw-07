"use strict";

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const gallery = document.querySelector("#gallery");
  gallery.classList.add('position');

  const createItemList = (array, list) => {
    const li = array.map((item) => {
      const listItem = document.createElement("li");
      const image = document.createElement("img");
      image.setAttribute('src', `${item.url}`);
      image.setAttribute('alt', `${item.alt}`);
      image.classList.add('gallery');
      listItem.appendChild(image);

      return listItem;
    });
    list.append(...li);
    return list;
  };

  console.log(createItemList(images, gallery));
  