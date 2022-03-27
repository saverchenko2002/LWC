public with sharing class PageToDoc {
    private static final String docTitle = '421 Application document';
    private static final String docExtension = '.pdf';
    @InvocableMethod(label='Page to doc')
    public static void pageToDoc(List<Id> caseIds) {
        // System.debug(caseIds);
        // PageReference pdf = Page.page1_421a;
        // Attachment attach = new Attachment();
        // Blob body = pdf.getContentAsPDF();
        // attach.Body = body;
        // attach.Name = '421 Application document';
        // attach.ParentId = caseIds[0];
        // insert attach;

        PageReference pageRef = Page.page1_421a;
        Blob body = pageRef.getContentAsPDF();

        ContentVersion conVer = new ContentVersion(Title = docTitle, pathOnClient = docTitle+docExtension, versiondata = body);
        insert conVer;

        Id conDoc = [SELECT ContentDocumentId FROM ContentVersion WHERE Id =:conVer.Id].ContentDocumentId;
        Id condocId = cv.contentDocumentId;
        system.debug(condocId + ' ' + conver.Id);

        ContentDocumentLink conDocLink = new ContentDocumentLink();
        conDocLink.linkedEntityId = caseIds[0];
        conDocLink.contentDocumentId = condocId;
        conDocLink.sharetype = 'V';

        insert conDocLink;
        



    }
}
