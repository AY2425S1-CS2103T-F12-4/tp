package seedu.address.logic.commands;

import java.util.Arrays;
import java.util.List;

import seedu.address.model.Model;

/**
 * Format full help instructions for every command for display.
 */
public class HelpCommand extends Command {

    public static final String COMMAND_WORD = ":help";

    public static final String MESSAGE_USAGE = COMMAND_WORD + ": Shows program usage instructions.\n"
            + "Example: " + COMMAND_WORD;

    public static final String SHOWING_HELP_MESSAGE = "Opened command cheatsheet.";
    public static final String COMMAND_SUMMARY_ACTION = "Help";
    public static final String COMMAND_SUMMARY_FORMAT =
            ":help";
    public static final String COMMAND_SUMMARY_EXAMPLES =
            ":help";



    public static final List<String> INVALID_VARIANTS = Arrays.asList("help", ":h", "h");

    @Override
    public CommandResult execute(Model model) {
        return new CommandResult(SHOWING_HELP_MESSAGE, true, false);
    }
}
