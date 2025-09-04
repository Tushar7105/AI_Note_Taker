import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const AddFileEntryToDb = mutation({
  args:{
    fileId:v.string(),
    storageId:v.string(),
    fileName:v.string(),
    fileUrl : v.string(),
    createdBy:v.string()
  },
  handler:async(ctx,args)=>{
    const result = await ctx.db.insert('pdfFiles', {
      fileId : args.fileId,
      fileName : args.fileName,
      storageId : args.storageId,
      fileUrl : args.fileUrl,
      createdBy : args.createdBy
    })

    return "file stored successfully"
  }
})

export const GetFileUrl = mutation({
  args:{
    storageId : v.string()
  },
  handler:async(ctx, args)=>{
    const url = await ctx.storage.getUrl(args.storageId);
    return url;
  }
})

export const GetFileRecord = query({
  args:{
    fileId : v.string()
  },
  handler: async (ctx, args)=>{
    const result = await ctx.db.query('pdfFiles')
    .filter((q)=>q.eq(q.field('fileId'), args.fileId)).collect();

    return result[0];
  }
})

export const GetUserFile = query({
  args : {
    userEmail : v.optional(v.string())
  },
  handler : async (ctx, args)=>{
    if(!args?.userEmail) return ;
    const result = await ctx.db.query('pdfFiles')
    .filter((q)=>q.eq(q.field('createdBy'), args.userEmail)).collect();
    return result;
  }
})

export const DeleteFileFromDB = mutation({
  args : {
    fileId : v.string()
  }, handler : async (ctx, args)=>{
    const pdfList = await ctx.db.query('pdfFiles').filter((q)=>q.eq(q.field('fileId'), args.fileId)).collect();
    const notesList = await ctx.db.query('notes').filter((q)=>q.eq(q.field('fileId'), args.fileId)).collect();
    const documentList = await ctx.db.query('documents').filter((q)=>q.eq(q.field('metadata.fileId'), args.fileId)).collect();

    for (const pdf of pdfList) {
      await ctx.db.delete(pdf._id);
    }

    for (const note of notesList) {
      await ctx.db.delete(note._id);
    }

    for (const doc of documentList) {
      await ctx.db.delete(doc._id);
    }
    return "deleted";
  }
})