const initMap = async () => {
  await ymaps3.ready;

  ymaps3.import.registerCdn(
    './libs/{package}',
    '@yandex/ymaps3-default-ui-theme@latest'
  );

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
  const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

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
