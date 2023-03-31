"use strict";
(self["webpackChunkquasar_admin_server"] = self["webpackChunkquasar_admin_server"] || []).push([[8342],{

/***/ 70771:
/***/ ((module) => {

module.exports = JSON.parse('{"ComponentIconPicker.search.placeholder":"Buscar un icono","attribute.boolean":"Booleano","attribute.boolean.description":"Si o no, 1 o 0, verdadero o falso","attribute.component":"Componente","attribute.component.description":"Grupo de campos que puedes repetir o reutilizar","attribute.date":"Fecha","attribute.date.description":"Un selector de fechas con horas, minutos y segundos","attribute.datetime":"Fecha y hora","attribute.dynamiczone":"Zona dinámica","attribute.dynamiczone.description":"Elija componentes dinámicamente al editar contenido","attribute.email":"Correo electrónico","attribute.email.description":"Campo de correo electrónico con formato de validaciones","attribute.enumeration":"Enumeración","attribute.enumeration.description":"Lista de valores, luego elija uno","attribute.json":"JSON","attribute.json.description":"Datos en formato JSON","attribute.media":"Media","attribute.media.description":"Archivos como imágenes, videos, etc.","attribute.null":" ","attribute.number":"Número","attribute.number.description":"Números (entero, flotante, decimal)","attribute.password":"Contraseña","attribute.password.description":"Campo de contraseña con cifrado","attribute.relation":"Relación","attribute.relation.description":"Se refiere a un Tipo de Colección","attribute.richtext":"Texto enriquecido","attribute.richtext.description":"Un editor de texto enriquecido con opciones de formato.","attribute.text":"Texto","attribute.text.description":"Texto corto o largo como título o descripción","attribute.time":"Hora","attribute.timestamp":"Marca de tiempo","attribute.uid":"UID","attribute.uid.description":"Identificador único","button.attributes.add.another":"Agregar otro campo","button.component.add":"Agregar un componente","button.component.create":"Crear nuevo componente","button.model.create":"Crear nuevo Tipo de Colección","button.single-types.create":"Crear nuevo tipo único","component.repeatable":"(repetible)","components.SelectComponents.displayed-value":"{number, plural, =0 {ningún componente seleccionado} one {1 componente seleccionado} other {# componentes seleccionados}}","components.componentSelect.no-component-available":"Ya ha agregado todos sus componentes","components.componentSelect.no-component-available.with-search":"No hay ningún componente que coincida con su búsqueda","components.componentSelect.value-component":"{number} componente seleccionado (escriba para buscar un componente)","components.componentSelect.value-components":"{number} componentes seleccionados","configurations":"configuraciones","contentType.apiId-plural.description":"ID de API pluralizado","contentType.apiId-plural.label":"ID de API (Plural)","contentType.apiId-singular.description":"El UID se utiliza para generar las rutas de la API y las tablas/colecciones de la base de datos","contentType.apiId-singular.label":"ID de API (Singular)","contentType.collectionName.description":"Útil cuando el nombre de su Tipo de Contenido y el nombre de su tabla difieren","contentType.collectionName.label":"Nombre de la colección","contentType.displayName.label":"Nombre para mostrar","contentType.draftAndPublish.description":"Escribe un borrador de cada entrada antes de publicarla.","contentType.draftAndPublish.label":"Sistema de borrador/publicación","contentType.kind.change.warning":"Acaba de cambiar el Tipo de Contenido: la API se restablecerá (las rutas, los controladores y los servicios se sobrescribirán).","error.attributeName.reserved-name":"Este nombre no se puede utilizar en su Tipo de Contenido, ya que podría romper otras funcionalidades.","error.contentType.pluralName-used":"Este valor no puede ser igual al valor singular","error.contentType.singularName-used":"Este valor no puede ser igual al valor plural","error.contentTypeName.reserved-name":"Este nombre no se puede utilizar en su proyecto, ya que podría romper otras funcionalidades.","error.validation.enum-duplicate":"No se permiten valores duplicados","error.validation.enum-empty-string":"No se permiten cadenas de caracteres vacías","error.validation.minSupMax":"No puede ser superior","error.validation.positive":"Debe ser un número positivo","error.validation.regex":"El patrón de expresión regular no es válido","error.validation.relation.targetAttribute-taken":"Este nombre existe en el destino","form.attribute.component.option.add":"Agregar un componente","form.attribute.component.option.create":"Crea un nuevo componente","form.attribute.component.option.create.description":"Un componente se comparte entre tipos y componentes, estará disponible y accesible en todas partes.","form.attribute.component.option.repeatable":"Componente repetible","form.attribute.component.option.repeatable.description":"Lo mejor para múltiples instancias (matriz) de ingredientes, meta etiquetas, etc.","form.attribute.component.option.reuse-existing":"Utilice un componente existente","form.attribute.component.option.reuse-existing.description":"Reutilice un componente ya creado para mantener la coherencia de sus datos en todos los tipos de contenido.","form.attribute.component.option.single":"Componente único","form.attribute.component.option.single.description":"Lo mejor para agrupar campos como dirección completa, información principal...","form.attribute.item.customColumnName":"Nombres de columna personalizados","form.attribute.item.customColumnName.description":"Esto es útil para renombrar los nombres de las columnas de la base de datos en un formato más completo para las respuestas de la API.","form.attribute.item.defineRelation.fieldName":"Nombre del campo","form.attribute.item.enumeration.graphql":"Sobreescritura de nombre para GraphQL","form.attribute.item.enumeration.graphql.description":"Le permite redefinir el nombre generado por defecto para GraphQL","form.attribute.item.enumeration.placeholder":"Ej:\\nmañana\\nmediodía\\nnoche","form.attribute.item.enumeration.rules":"Valores (una línea por valor)","form.attribute.item.maximum":"Valor máximo","form.attribute.item.maximumLength":"Longitud máxima","form.attribute.item.minimum":"Valor mínimo","form.attribute.item.minimumLength":"Longitud mínima","form.attribute.item.number.type":"Tipo de número","form.attribute.item.number.type.biginteger":"entero grande (ej: 123456789)","form.attribute.item.number.type.decimal":"decimal (ej: 2.22)","form.attribute.item.number.type.float":"flotante (ej: 3.3333333333)","form.attribute.item.number.type.integer":"entero (ej: 10)","form.attribute.item.privateField":"Campo privado","form.attribute.item.privateField.description":"Este campo no aparecerá en la respuesta de la API","form.attribute.item.requiredField":"Campo obligatorio","form.attribute.item.requiredField.description":"No podrá crear un registro si este campo está vacío","form.attribute.item.text.regex":"Patrón de expresión regular","form.attribute.item.text.regex.description":"El texto de la expresión regular","form.attribute.item.uniqueField":"Campo único","form.attribute.item.uniqueField.description":"No podrá crear un registro si ya existe otro registro con el mismo contenido","form.attribute.media.allowed-types":"Seleccionar tipos de multimedia permitidos","form.attribute.media.allowed-types.option-files":"Archivos","form.attribute.media.allowed-types.option-images":"Imágenes","form.attribute.media.allowed-types.option-videos":"Videos","form.attribute.media.option.multiple":"Múltiples multimedia","form.attribute.media.option.multiple.description":"Ideal para controles deslizantes, carruseles o descarga de varios archivos","form.attribute.media.option.single":"Multimedia único","form.attribute.media.option.single.description":"Lo mejor para avatar, foto de perfil o portada","form.attribute.settings.default":"Valor por defecto","form.attribute.text.option.long-text":"Texto largo","form.attribute.text.option.long-text.description":"Mejor para descripciones o biografía. La búsqueda exacta está inhabilitada.","form.attribute.text.option.short-text":"Texto corto","form.attribute.text.option.short-text.description":"Mejor para títulos, nombres, enlaces (URL). También permite una búsqueda exacta en el campo.","form.button.add-components-to-dynamiczone":"Agregar componentes a la zona","form.button.add-field":"Agregar otro campo","form.button.add-first-field-to-created-component":"Agregue el primer campo al componente","form.button.add.field.to.collectionType":"Agrega otro campo a este tipo de colección","form.button.add.field.to.component":"Agregar otro campo a este componente","form.button.add.field.to.contentType":"Agregar campo al Tipo de Contenido","form.button.add.field.to.singleType":"Agregue otro campo a este tipo único","form.button.cancel":"Cancelar","form.button.collection-type.description":"Lo mejor para múltiples instancias como artículos, productos, comentarios, etc.","form.button.configure-component":"Configurar el componente","form.button.configure-view":"Configurar la vista","form.button.select-component":"Seleccione un componente","form.button.single-type.description":"Lo mejor para una sola instancia como acerca de nosotros, página de inicio, etc.","form.contentType.divider.draft-publish":"BORRAR/PUBLICAR","from":"de","listView.headerLayout.description":"Construya la arquitectura de datos de su contenido","modalForm.attribute.form.base.name.description":"No se permiten espacios para el nombre del atributo","modalForm.attribute.form.base.name.placeholder":"p. ej. Slug, URL SEO, URL canónica","modalForm.attribute.target-field":"Campo adjunto","modalForm.attributes.select-component":"Seleccione un componente","modalForm.attributes.select-components":"Seleccionar los componentes","modalForm.collectionType.header-create":"Crea un tipo de colección","modalForm.component.header-create":"Crea un componente","modalForm.components.create-component.category.label":"Seleccione una categoría o ingrese un nombre para crear una nueva","modalForm.components.icon.label":"Icono","modalForm.editCategory.base.name.description":"No se permiten espacios para el nombre de la categoría.","modalForm.header-edit":"Editar {name}","modalForm.header.categories":"Categorías","modalForm.singleType.header-create":"Crea un tipo único","modalForm.sub-header.addComponentToDynamicZone":"Agregar nuevo componente a la zona dinámica","modalForm.sub-header.attribute.create":"Agregar nuevo campo {type}","modalForm.sub-header.attribute.create.step":"Agregar nuevo componente ({step}/2)","modalForm.sub-header.attribute.edit":"Editar {name}","modalForm.sub-header.chooseAttribute.collectionType":"Seleccione un campo para su Tipo de Colección","modalForm.sub-header.chooseAttribute.component":"Seleccione un campo para su componente","modalForm.sub-header.chooseAttribute.singleType":"Seleccione un campo para su tipo único","modelPage.attribute.relation-polymorphic":"Relación (polimórfica)","modelPage.attribute.relationWith":"Vinculación con","notification.info.autoreaload-disable":"Se requiere la función autoReload para usar este plugin. Inicie su servidor con `strapi develop`","notification.info.creating.notSaved":"Guarde su trabajo antes de crear un nuevo tipo de colección o componente","plugin.description.long":"Modelice la estructura de datos de su API. Cree nuevos campos y relaciones en sólo un minuto. Los archivos se crean y actualizan automáticamente en el proyecto.","plugin.description.short":"Modelice la estructura de datos de su API.","plugin.name":"Generador de Tipo de Contenido","popUpForm.navContainer.advanced":"Configuración avanzada","popUpForm.navContainer.base":"Ajustes básicos","popUpWarning.bodyMessage.cancel-modifications":"¿Estás seguro de que deseas cancelar tus modificaciones?","popUpWarning.bodyMessage.cancel-modifications.with-components":"¿Está seguro de que desea cancelar sus modificaciones? Algunos componentes han sido creados o modificados...","popUpWarning.bodyMessage.category.delete":"¿Está seguro de que desea eliminar esta categoría? También se eliminarán todos los componentes.","popUpWarning.bodyMessage.component.delete":"¿Está seguro de que desea eliminar este componente?","popUpWarning.bodyMessage.contentType.delete":"¿Está seguro de que desea eliminar este Tipo de Contenido?","popUpWarning.draft-publish.button.confirm":"Sí, deshabilitar","popUpWarning.draft-publish.message":"Si desactiva el sistema Borrador/Publicación, se eliminarán sus borradores.","popUpWarning.draft-publish.second-message":"¿Estás seguro de que quieres desactivarlo?","prompt.unsaved":"¿Estás seguro que quieres irte? Todas sus modificaciones se perderán.","relation.attributeName.placeholder":"Ej: autor, categoría, etiqueta","relation.manyToMany":"tiene y pertenece a muchos","relation.manyToOne":"tiene muchos","relation.manyWay":"tiene muchas","relation.oneToMany":"pertenece a muchos","relation.oneToOne":"tiene y pertenece a una","relation.oneWay":"tiene uno","table.button.no-fields":"Agregar campo","table.content.create-first-content-type":"Crea tu primer Tipo de Colección","table.content.no-fields.collection-type":"Agrega tu primer campo a este Tipo de Colección","table.content.no-fields.component":"Agregar tu primer campo a este componente"}');

/***/ })

}]);