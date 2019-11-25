// public Guid UserID { get; set; }
// [Key]
// public int MessageID { get; set; }
// [ForeignKey("TeamVariable")]
// public int TeamID { get; set; }
// public virtual Team TeamVariable { get; set; }
// public string Title { get; set; }
// public string Content { get; set; }
// public string FileName { get; set; }
// public byte[] FileContent { get; set; }
// public DateTimeOffset? CreatedUtc { get; set; }
// public DateTimeOffset? Modifiedutc { get; set; }
// public ICollection<Profile> Roster { get; set; }
export interface TeamMessaging {
    UserID?: number;
    MessageID?: number;
    TeamID?: number;
    Title: string;
    Content: string;
    FileName?: string;
    FileContent?: Array<string>;
    CreatedUtc?: Date;
    Modifiedutc?: Date;
    Roster?: Array<string>;
    File: File;
}
