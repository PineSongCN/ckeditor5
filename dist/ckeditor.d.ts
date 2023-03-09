import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
declare class Editor extends ClassicEditor {
    static builtinPlugins: any[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        language: string;
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
    };
}
export default Editor;
//# sourceMappingURL=ckeditor.d.ts.map