/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/authtokens": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.authtokens.id"];
          token?: parameters["rowFilter.authtokens.token"];
          description?: parameters["rowFilter.authtokens.description"];
          projectId?: parameters["rowFilter.authtokens.projectId"];
          userId?: parameters["rowFilter.authtokens.userId"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["authtokens"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** authtokens */
          authtokens?: definitions["authtokens"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.authtokens.id"];
          token?: parameters["rowFilter.authtokens.token"];
          description?: parameters["rowFilter.authtokens.description"];
          projectId?: parameters["rowFilter.authtokens.projectId"];
          userId?: parameters["rowFilter.authtokens.userId"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.authtokens.id"];
          token?: parameters["rowFilter.authtokens.token"];
          description?: parameters["rowFilter.authtokens.description"];
          projectId?: parameters["rowFilter.authtokens.projectId"];
          userId?: parameters["rowFilter.authtokens.userId"];
        };
        body: {
          /** authtokens */
          authtokens?: definitions["authtokens"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/categories": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.categories.id"];
          name?: parameters["rowFilter.categories.name"];
          description?: parameters["rowFilter.categories.description"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["categories"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** categories */
          categories?: definitions["categories"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.categories.id"];
          name?: parameters["rowFilter.categories.name"];
          description?: parameters["rowFilter.categories.description"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.categories.id"];
          name?: parameters["rowFilter.categories.name"];
          description?: parameters["rowFilter.categories.description"];
        };
        body: {
          /** categories */
          categories?: definitions["categories"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/devices": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.devices.id"];
          externalId?: parameters["rowFilter.devices.externalId"];
          name?: parameters["rowFilter.devices.name"];
          projectId?: parameters["rowFilter.devices.projectId"];
          userId?: parameters["rowFilter.devices.userId"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["devices"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** devices */
          devices?: definitions["devices"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.devices.id"];
          externalId?: parameters["rowFilter.devices.externalId"];
          name?: parameters["rowFilter.devices.name"];
          projectId?: parameters["rowFilter.devices.projectId"];
          userId?: parameters["rowFilter.devices.userId"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.devices.id"];
          externalId?: parameters["rowFilter.devices.externalId"];
          name?: parameters["rowFilter.devices.name"];
          projectId?: parameters["rowFilter.devices.projectId"];
          userId?: parameters["rowFilter.devices.userId"];
        };
        body: {
          /** devices */
          devices?: definitions["devices"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/projects": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects.id"];
          name?: parameters["rowFilter.projects.name"];
          description?: parameters["rowFilter.projects.description"];
          createdAt?: parameters["rowFilter.projects.createdAt"];
          connectype?: parameters["rowFilter.projects.connectype"];
          location?: parameters["rowFilter.projects.location"];
          userId?: parameters["rowFilter.projects.userId"];
          categoryId?: parameters["rowFilter.projects.categoryId"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["projects"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** projects */
          projects?: definitions["projects"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects.id"];
          name?: parameters["rowFilter.projects.name"];
          description?: parameters["rowFilter.projects.description"];
          createdAt?: parameters["rowFilter.projects.createdAt"];
          connectype?: parameters["rowFilter.projects.connectype"];
          location?: parameters["rowFilter.projects.location"];
          userId?: parameters["rowFilter.projects.userId"];
          categoryId?: parameters["rowFilter.projects.categoryId"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects.id"];
          name?: parameters["rowFilter.projects.name"];
          description?: parameters["rowFilter.projects.description"];
          createdAt?: parameters["rowFilter.projects.createdAt"];
          connectype?: parameters["rowFilter.projects.connectype"];
          location?: parameters["rowFilter.projects.location"];
          userId?: parameters["rowFilter.projects.userId"];
          categoryId?: parameters["rowFilter.projects.categoryId"];
        };
        body: {
          /** projects */
          projects?: definitions["projects"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/records": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.records.id"];
          recordedAt?: parameters["rowFilter.records.recordedAt"];
          measurements?: parameters["rowFilter.records.measurements"];
          longitude?: parameters["rowFilter.records.longitude"];
          latitude?: parameters["rowFilter.records.latitude"];
          altitude?: parameters["rowFilter.records.altitude"];
          deviceId?: parameters["rowFilter.records.deviceId"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["records"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** records */
          records?: definitions["records"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.records.id"];
          recordedAt?: parameters["rowFilter.records.recordedAt"];
          measurements?: parameters["rowFilter.records.measurements"];
          longitude?: parameters["rowFilter.records.longitude"];
          latitude?: parameters["rowFilter.records.latitude"];
          altitude?: parameters["rowFilter.records.altitude"];
          deviceId?: parameters["rowFilter.records.deviceId"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.records.id"];
          recordedAt?: parameters["rowFilter.records.recordedAt"];
          measurements?: parameters["rowFilter.records.measurements"];
          longitude?: parameters["rowFilter.records.longitude"];
          latitude?: parameters["rowFilter.records.latitude"];
          altitude?: parameters["rowFilter.records.altitude"];
          deviceId?: parameters["rowFilter.records.deviceId"];
        };
        body: {
          /** records */
          records?: definitions["records"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/users": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          name?: parameters["rowFilter.users.name"];
          createdAt?: parameters["rowFilter.users.createdAt"];
          role?: parameters["rowFilter.users.role"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["users"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** users */
          users?: definitions["users"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          name?: parameters["rowFilter.users.name"];
          createdAt?: parameters["rowFilter.users.createdAt"];
          role?: parameters["rowFilter.users.role"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          name?: parameters["rowFilter.users.name"];
          createdAt?: parameters["rowFilter.users.createdAt"];
          role?: parameters["rowFilter.users.role"];
        };
        body: {
          /** users */
          users?: definitions["users"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rpc/delete_user": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/handle_new_user": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  authtokens: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    token: string;
    description: string;
    /**
     * Note:
     * This is a Foreign Key to `projects.id`.<fk table='projects' column='id'/>
     */
    projectId: number;
    /**
     * Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    userId?: string;
  };
  categories: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    name:
      | "Temperatur"
      | "CO2"
      | "Luftfeuchtigkeit"
      | "Druck"
      | "PAXCounter"
      | "Lautstärke";
    description: string;
  };
  devices: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    externalId: string;
    name?: string;
    /**
     * Note:
     * This is a Foreign Key to `projects.id`.<fk table='projects' column='id'/>
     */
    projectId: number;
    /**
     * Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    userId?: string;
  };
  projects: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    name: string;
    description?: string;
    createdAt: string;
    connectype: "ttn" | "other";
    location?: string;
    /**
     * Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    userId: string;
    /**
     * Note:
     * This is a Foreign Key to `categories.id`.<fk table='categories' column='id'/>
     */
    categoryId: number;
  };
  records: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    recordedAt: string;
    measurements?: string;
    longitude?: number;
    latitude?: number;
    altitude?: number;
    /**
     * Note:
     * This is a Foreign Key to `devices.id`.<fk table='devices' column='id'/>
     */
    deviceId: number;
  };
  users: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    name?: string;
    createdAt: string;
    role?: "maker";
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** authtokens */
  "body.authtokens": definitions["authtokens"];
  "rowFilter.authtokens.id": string;
  "rowFilter.authtokens.token": string;
  "rowFilter.authtokens.description": string;
  "rowFilter.authtokens.projectId": string;
  "rowFilter.authtokens.userId": string;
  /** categories */
  "body.categories": definitions["categories"];
  "rowFilter.categories.id": string;
  "rowFilter.categories.name": string;
  "rowFilter.categories.description": string;
  /** devices */
  "body.devices": definitions["devices"];
  "rowFilter.devices.id": string;
  "rowFilter.devices.externalId": string;
  "rowFilter.devices.name": string;
  "rowFilter.devices.projectId": string;
  "rowFilter.devices.userId": string;
  /** projects */
  "body.projects": definitions["projects"];
  "rowFilter.projects.id": string;
  "rowFilter.projects.name": string;
  "rowFilter.projects.description": string;
  "rowFilter.projects.createdAt": string;
  "rowFilter.projects.connectype": string;
  "rowFilter.projects.location": string;
  "rowFilter.projects.userId": string;
  "rowFilter.projects.categoryId": string;
  /** records */
  "body.records": definitions["records"];
  "rowFilter.records.id": string;
  "rowFilter.records.recordedAt": string;
  "rowFilter.records.measurements": string;
  "rowFilter.records.longitude": string;
  "rowFilter.records.latitude": string;
  "rowFilter.records.altitude": string;
  "rowFilter.records.deviceId": string;
  /** users */
  "body.users": definitions["users"];
  "rowFilter.users.id": string;
  "rowFilter.users.name": string;
  "rowFilter.users.createdAt": string;
  "rowFilter.users.role": string;
}

export interface operations {}
