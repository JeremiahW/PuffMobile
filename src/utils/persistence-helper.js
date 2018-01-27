
/**
 * @providesModule persistence-helper
 */
import { AsyncStorage } from 'react-native';

class PersistenceHelper {
    constructor() {
        _objectMap = {};
    }

    getItem(key, callback) {
        if (_objectMap.hasOwnProperty(key)) {
            callback(undefined, _objectMap[key])
        }
        else {
            AsyncStorage.getItem(key, (error, result) => {
                if (error) {
                    if (callback) {
                        callback(error, undefined);
                    }
                }
                else {
                    if (callback) {
                        callback(undefined, result);
                    }
                }

            })
        }
    }
    setItem(key, item, callback) {
        return AsyncStorage.setItem(key, item, (error) => {
            if (error) {
                if (callback) {
                    callback(error);
                }
            }
            else {
                _objectMap[key] = item;
                if (callback) {
                    callback();
                }

            }
        });
    }

    removeItem(key, callback) {
        return AsyncStorage.removeItem(key, (error) => {
            if (error) {
                if (callback) {
                    callback(error);
                }
            }
            else {
                delete _objectMap["key"];
                if (callback) {
                    callback();
                }
            }
        });

    }
}


const persistenceHelper = new PersistenceHelper();
export default persistenceHelper;