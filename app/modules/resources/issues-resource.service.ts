/*
 * Copyright (C) 2014-2017 Taiga Agile LLC <taiga@taiga.io>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * File: issues-resource.service.coffee
 */

let Resource = function(urlsService, http) {
    let service = {};

    service.listInAllProjects = function(params) {
        let url = urlsService.resolve("issues");

        let httpOptions = {
            headers: {
                "x-disable-pagination": "1"
            }
        };

        return http.get(url, params, httpOptions)
            .then(result => Immutable.fromJS(result.data));
    };

    return () => ({"issues": service});
};

Resource.$inject = ["$tgUrls", "$tgHttp"];

let module = angular.module("taigaResources2");
module.factory("tgIssuesResource", Resource);