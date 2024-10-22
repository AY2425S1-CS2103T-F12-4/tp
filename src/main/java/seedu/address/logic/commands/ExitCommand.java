package seedu.address.logic.commands;

import seedu.address.model.Model;

import java.util.Arrays;
import java.util.List;

/**
 * Terminates the program.
 */
public class ExitCommand extends Command {

    public static final String COMMAND_WORD = ":exit";

    public static final String MESSAGE_EXIT_ACKNOWLEDGEMENT = "Exiting Address Book as requested ...";

    public static final List<String> INVALID_VARIANTS = Arrays.asList("exit", "q", ":q");
    @Override
    public CommandResult execute(Model model) {
        return new CommandResult(MESSAGE_EXIT_ACKNOWLEDGEMENT, false, true);
    }

}
