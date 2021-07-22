class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    return dirtyFileName
      .match(/_\w+.\w+?(.\w+)/gi)
      .join("")
      .slice(1);
  }
}
