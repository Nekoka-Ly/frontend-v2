import ObjectManager from '@/utils/objectManager'
import commons from './_common'

function getIcon(key) {
  const ICON_MAP = {
    "MAINLINE": "mdi-checkerboard",
    "WEEKLY": "mdi-treasure-chest",
    "ACTIVITY": "mdi-sack"
  };
  return ICON_MAP[key]
}

const zones = new ObjectManager({
  name: 'zones',
  api: {
    url: "/zones",
  },
  transform: [
    (object) => {
      // object.push({
      //   "zoneId": "test01",
      //   "zoneIndex": 0,
      //   "type": "ACTIVITY",
      //   "zoneName": "测试活动",
      //   "zoneName_i18n": {"ja": "测试活动 ja", "en": "测试活动 en", "zh": "测试活动 zh"},
      //   "existence": {
      //     "US": {"exist": false},
      //     "JP": {"exist": false},
      //     "CN": {"exist": true, "openTime": 1700000000000, "closeTime": 1800000000000},
      //     "KR": {"exist": false}
      //   },
      //   "stages": ["act11d0_01", "act11d0_02", "act11d0_03", "act11d0_04", "act11d0_05", "act11d0_06", "act11d0_07", "act11d0_08"]
      // })

      object.map((el) => {
        el.icon = getIcon(el.type) || "mdi-help-circle";

        el.isActivity = el.type === "ACTIVITY";

        return el
      });
      return object
    }
  ],
  validator: commons.defaultValidator,
  ttl: 1000 * 60 * 60 * 1, // 1 hour
  ajaxHooks: commons.defaultAjaxHooks
});

export default zones