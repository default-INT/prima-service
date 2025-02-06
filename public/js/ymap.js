const initMap = async () => {
  await ymaps3.ready;

  ymaps3.import.registerCdn(
    'https://cdn.jsdelivr.net/npm/{package}',
    '@yandex/ymaps3-default-ui-theme@latest'
  );

  const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;
  const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

  const map = new YMap(
    document.getElementById('yandexMap'),
    {
      location: {
        center: [38.112122, 55.603842],
        zoom: 16,
        mode: 'vector'
      }
    }
  );

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());

  const content = document.createElement('section');
  content.innerHTML = '<p>Draggable paragraph</p>';

  const marker = new YMapDefaultMarker(
    {
      coordinates: [38.112122, 55.603842],
      size: 'normal',
      title: 'ул Спасателей, д. 2а',
      iconName: 'haulier',
    },
  );

  map.addChild(marker);
}

initMap();
