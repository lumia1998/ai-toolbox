import {
  AlertTriangle,
  AppWindow,
  ArrowLeftRight,
  Ban,
  Bot,
  Box,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleAlert,
  CircleX,
  Cloud,
  CloudDownload,
  CloudUpload,
  Code,
  Clock,
  Copy,
  Database,
  File,
  Download,
  Edit,
  Ellipsis,
  Eye,
  EyeOff,
  FileArchive,
  FileSearch,
  FileText,
  Folder,
  FolderOpen,
  Github,
  Globe,
  Grip,
  GripVertical,
  Import,
  Info,
  Lightbulb,
  Link,
  List,
  LoaderCircle,
  Lock,
  Menu,
  MessageCircle,
  MinusCircle,
  Monitor,
  MoreHorizontal,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Tags,
  Trash2,
  Upload,
  WifiSync,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const createIcon = (Icon: LucideIcon) => {
  const WrappedIcon = ({ className, style, spin, ...props }: any) => (
    <Icon
      {...props}
      className={className}
      style={{
        width: '1em',
        height: '1em',
        verticalAlign: '-0.125em',
        animation: spin ? 'ui-spin 1s linear infinite' : undefined,
        ...style,
      }}
    />
  );
  return WrappedIcon;
};

export const ApiOutlined = createIcon(Server);
export const AppstoreOutlined = createIcon(AppWindow);
export const CaretRightOutlined = createIcon(ChevronRight);
export const CheckCircleOutlined = createIcon(CheckCircle);
export const CheckOutlined = createIcon(Check);
export const ClearOutlined = createIcon(SlidersHorizontal);
export const CloseCircleOutlined = createIcon(CircleX);
export const CloseOutlined = createIcon(X);
export const CloudDownloadOutlined = createIcon(CloudDownload);
export const CloudServerOutlined = createIcon(Cloud);
export const CloudSyncOutlined = createIcon(WifiSync);
export const CloudUploadOutlined = createIcon(CloudUpload);
export const CodeSandboxOutlined = createIcon(Box);
export const CodeOutlined = createIcon(Code);
export const ClockCircleOutlined = createIcon(Clock);
export const CopyOutlined = createIcon(Copy);
export const DatabaseOutlined = createIcon(Database);
export const DeleteOutlined = createIcon(Trash2);
export const DesktopOutlined = createIcon(Monitor);
export const DownloadOutlined = createIcon(Download);
export const DownOutlined = createIcon(ChevronDown);
export const DragOutlined = createIcon(Grip);
export const EditOutlined = createIcon(Edit);
export const EllipsisOutlined = createIcon(Ellipsis);
export const ExclamationCircleOutlined = createIcon(CircleAlert);
export const ExportOutlined = createIcon(Upload);
export const EyeInvisibleOutlined = createIcon(EyeOff);
export const EyeOutlined = createIcon(Eye);
export const FileOutlined = createIcon(File);
export const FileSearchOutlined = createIcon(FileSearch);
export const FileTextOutlined = createIcon(FileText);
export const FileZipOutlined = createIcon(FileArchive);
export const FolderOpenOutlined = createIcon(FolderOpen);
export const FolderOutlined = createIcon(Folder);
export const GithubOutlined = createIcon(Github);
export const GlobalOutlined = createIcon(Globe);
export const HolderOutlined = createIcon(GripVertical);
export const ImportOutlined = createIcon(Import);
export const InfoCircleOutlined = createIcon(Info);
export const LinkOutlined = createIcon(Link);
export const LoadingOutlined = createIcon(LoaderCircle);
export const LockOutlined = createIcon(Lock);
export const MenuFoldOutlined = createIcon(ChevronLeft);
export const MenuUnfoldOutlined = createIcon(Menu);
export const MessageOutlined = createIcon(MessageCircle);
export const MinusCircleOutlined = createIcon(MinusCircle);
export const MoreOutlined = createIcon(MoreHorizontal);
export const PlusOutlined = createIcon(Plus);
export const ReloadOutlined = createIcon(RefreshCw);
export const RightOutlined = createIcon(ChevronRight);
export const RobotOutlined = createIcon(Bot);
export const SafetyCertificateOutlined = createIcon(ShieldCheck);
export const SafetyOutlined = createIcon(Shield);
export const SearchOutlined = createIcon(Search);
export const SettingOutlined = createIcon(Settings);
export const StopOutlined = createIcon(Ban);
export const SwapOutlined = createIcon(ArrowLeftRight);
export const SyncOutlined = createIcon(RefreshCw);
export const TagsOutlined = createIcon(Tags);
export const ThunderboltOutlined = createIcon(Zap);
export const ToolOutlined = createIcon(Wrench);
export const UndoOutlined = createIcon(RotateCcw);
export const UnorderedListOutlined = createIcon(List);
export const UpOutlined = createIcon(ChevronUp);
export const WarningOutlined = createIcon(AlertTriangle);
export const BulbOutlined = createIcon(Lightbulb);
