/* tslint:disable */
/* eslint-disable */
/**
 * Wardley Mapping Crew API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.8.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MapTextAndWarnings
 */
export interface MapTextAndWarnings {
    /**
     * 
     * @type {string}
     * @memberof MapTextAndWarnings
     */
    owmtext: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof MapTextAndWarnings
     */
    warnings: Array<any>;
}

export function MapTextAndWarningsFromJSON(json: any): MapTextAndWarnings {
    return MapTextAndWarningsFromJSONTyped(json, false);
}

export function MapTextAndWarningsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MapTextAndWarnings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'owmtext': json['owmtext'],
        'warnings': json['warnings'],
    };
}

export function MapTextAndWarningsToJSON(value?: MapTextAndWarnings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'owmtext': value.owmtext,
        'warnings': value.warnings,
    };
}

